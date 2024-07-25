import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as appsync from 'aws-cdk-lib/aws-appsync'
import { IGraphqlApi } from 'aws-cdk-lib/aws-appsync';

export class CdkApiConfigStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const apiConfigFunction = new lambda.Function(this, "ApiConfigFunction", {
      runtime: lambda.Runtime.NODEJS_LATEST,
      code: lambda.Code.fromAsset("lambda"),
      handler: "api-config.handler",
    });

    const api = new apigateway.LambdaRestApi(this, "ApiConfig", {
      handler: apiConfigFunction,
      proxy: false,
    });

    const apiConfigResource = api.root.addResource('config');
    apiConfigResource.addMethod('GET');

    // us-east-1
    // const mergedAPI = new appsync.GraphqlApi(this, 'appmerged-dev', {
    //   name:'appmerged-dev',
    //   authorizationConfig: {
    //     defaultAuthorization: {
    //       authorizationType: appsync.AuthorizationType.API_KEY,
    //     }
    //   },
    //   definition: appsync.Definition.fromSourceApis({
    //     sourceApis: [
    //       {
    //         sourceApi: appsync.GraphqlApi.fromGraphqlApiAttributes(this, 'appbackend1-dev', {
    //           graphqlApiId: 'ippm2vv63bc4fgvcrlylyiwnre',
    //           graphqlApiArn: 'arn:aws:appsync:us-east-1:275727400916:apis/ippm2vv63bc4fgvcrlylyiwnre'
    //         }),
    //         mergeType: appsync.MergeType.MANUAL_MERGE,
    //       },
    //       {
    //         sourceApi: appsync.GraphqlApi.fromGraphqlApiAttributes(this, 'appbackend2-dev', {
    //           graphqlApiId: 'u4v2c6x3knhapbab4y2a6zchta',
    //           graphqlApiArn: 'arn:aws:appsync:us-east-1:275727400916:apis/u4v2c6x3knhapbab4y2a6zchta'
    //         }),
    //         mergeType: appsync.MergeType.MANUAL_MERGE,
    //       }
    //     ],
    //   }),
    // });

    // us-west-2
    const mergedAPI = new appsync.GraphqlApi(this, 'appmerged-devdr', {
      name:'appmerged-devdr',
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
        }
      },
      definition: appsync.Definition.fromSourceApis({
        sourceApis: [
          {
            sourceApi: appsync.GraphqlApi.fromGraphqlApiAttributes(this, 'appbackend1-devdr', {
              graphqlApiId: 'yasooyt2cng4fijx2ikjiiex7u',
              graphqlApiArn: 'arn:aws:appsync:us-west-2:275727400916:apis/yasooyt2cng4fijx2ikjiiex7u'
            }),
            mergeType: appsync.MergeType.MANUAL_MERGE,
          },
          {
            sourceApi: appsync.GraphqlApi.fromGraphqlApiAttributes(this, 'appbackend2-devdr', {
              graphqlApiId: '3jhudnbh3rhspfbi7qtv7vvq24',
              graphqlApiArn: 'arn:aws:appsync:us-west-2:275727400916:apis/3jhudnbh3rhspfbi7qtv7vvq24'
            }),
            mergeType: appsync.MergeType.MANUAL_MERGE,
          }
        ],
      }),
    });
  }
}
