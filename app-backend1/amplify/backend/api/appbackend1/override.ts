import { AmplifyApiGraphQlResourceStackTemplate, AmplifyProjectInfo } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyApiGraphQlResourceStackTemplate, amplifyProjectInfo: AmplifyProjectInfo) {
    const denaliEnv = "dev"
    let callbackUrl = ""
    let openSearchInstanceCount;
    let openSearchZoneAwarenessEnabled;
    let openSearchInstanceType;
    if (denaliEnv === "dev") {
        console.log("Env is dev")
        callbackUrl = "http://localhost:8080"
        openSearchInstanceCount = 3;
        openSearchZoneAwarenessEnabled = true;
        openSearchInstanceType = "t3.medium.elasticsearch"
    }
    else if (denaliEnv === "devdr") {
        console.log("Env is devdr")
    }
    else {
        console.log("Env not set, setting default values")
    }

    resources.opensearch.OpenSearchDomain.elasticsearchClusterConfig = {
        ...resources.opensearch.OpenSearchDomain.elasticsearchClusterConfig,
        instanceCount: openSearchInstanceCount,
        instanceType: openSearchInstanceType,
        zoneAwarenessConfig: {
            availabilityZoneCount: openSearchInstanceCount
        },
        zoneAwarenessEnabled: openSearchZoneAwarenessEnabled
    }

    function configureAppSyncDataSource (globalTableName: string, modelName: string, region: string, accountId: string) {
        resources.models[modelName].modelDatasource.dynamoDbConfig = {tableName: globalTableName, awsRegion: region};
        resources.models[modelName].modelIamRoleDefaultPolicy.policyDocument = {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Action": [
                        "dynamodb:BatchGetItem",
                        "dynamodb:GetRecords",
                        "dynamodb:GetShardIterator",
                        "dynamodb:Query",
                        "dynamodb:GetItem",
                        "dynamodb:Scan",
                        "dynamodb:ConditionCheckItem",
                        "dynamodb:BatchWriteItem",
                        "dynamodb:PutItem",
                        "dynamodb:UpdateItem",
                        "dynamodb:DeleteItem",
                        "dynamodb:DescribeTable"
                    ],
                    "Resource": [
                        "arn:aws:dynamodb:" + region + ":" + accountId + ":table/" + globalTableName,
                        "arn:aws:dynamodb:" + region + ":" + accountId + ":table/" + globalTableName + "/*"
                    ],
                    "Effect": "Allow"
                }
            ]
        };
    }

    function configureOpenSearchStreamingLambdaRolePolicy (osDomainName: string, region: string, accountId: string) {
        resources.opensearch.OpenSearchStreamingLambdaIAMRoleDefaultPolicy.policyDocument = {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Action": [
                        "es:ESHttpDelete",
                        "es:ESHttpPost",
                        "es:ESHttpPut",
                        "es:ESHttpPatch"
                    ],
                    "Resource": [
                        "arn:aws:es:" + region + ":" + accountId + ":domain/" + osDomainName,
                        "arn:aws:es:" + region + ":" + accountId + ":domain/" + osDomainName + "/*"
                    ],
                    "Effect": "Allow"
                },
                {
                    "Action": "dynamodb:ListStreams",
                    "Resource": "*",
                    "Effect": "Allow"
                },
                {
                    "Action": [
                        "dynamodb:DescribeStream",
                        "dynamodb:GetRecords",
                        "dynamodb:GetShardIterator"
                    ],
                    "Resource": "arn:aws:dynamodb:" + region + ":" + accountId + ":table/*/stream/*",
                    "Effect": "Allow"
                }
            ]
        };
    }

    function configureOpenSearchModel (modelName: string, streamArn: string) {
        resources.opensearch.OpenSearchModelLambdaMapping[modelName].eventSourceArn = streamArn;
    }

    // Config for both regions
    const varAccountId = '275727400916';
    
    // Config for us-east-1 only
    const varRegion = 'us-east-1';
    const osDomainName = "amplify-opense-ph9909zznpti";
    configureOpenSearchModel('Blog', 'arn:aws:dynamodb:us-east-1:275727400916:table/Blog-GlobalTable-AzureADB2C-2/stream/2024-06-21T21:16:46.898');
    configureOpenSearchModel('Post', 'arn:aws:dynamodb:us-east-1:275727400916:table/Post-GlobalTable/stream/2024-07-05T19:04:17.503');
    
    // Config for us-west-2 only
    // const varRegion = 'us-west-2';
    // const osDomainName = "amplify-opense-1s42kiy2cu3ha";
    // configureOpenSearchModel('Blog', 'arn:aws:dynamodb:us-west-2:275727400916:table/Blog-GlobalTable-AzureADB2C-2/stream/2024-06-21T21:22:53.188');
    // configureOpenSearchModel('Post', 'arn:aws:dynamodb:us-west-2:275727400916:table/Post-GlobalTable/stream/2024-07-05T19:10:38.869');
    // configureAppSyncDataSource('User2-ippm2vv63bc4fgvcrlylyiwnre-dev', 'User2', varRegion, varAccountId);
    // configureOpenSearchModel('User2', 'arn:aws:dynamodb:us-west-2:275727400916:table/User2-ippm2vv63bc4fgvcrlylyiwnre-dev/stream/2024-07-11T17:24:15.358');
        
    // Config for both regions - AppSync Data Source
    configureAppSyncDataSource('Blog-GlobalTable-AzureADB2C-2', 'Blog', varRegion, varAccountId);
    configureAppSyncDataSource('Post-GlobalTable', 'Post', varRegion, varAccountId);
    configureAppSyncDataSource('PostTags-GlobalTable', 'PostTags', varRegion, varAccountId);
    configureAppSyncDataSource('Tag-GlobalTable', 'Tag', varRegion, varAccountId);
    configureAppSyncDataSource('User-GlobalTable', 'User', varRegion, varAccountId);

    // Config for both regions - Searchable
    configureOpenSearchStreamingLambdaRolePolicy(osDomainName, varRegion, varAccountId);
}