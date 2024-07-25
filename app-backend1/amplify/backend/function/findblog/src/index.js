/* Amplify Params - DO NOT EDIT
	API_APPBACKEND1_GRAPHQLAPIENDPOINTOUTPUT
	API_APPBACKEND1_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async function (event, context) {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    console.log(`EVENT ARGS: ${JSON.stringify(event.arguments)}`);
	console.log(`BLOG TABLE NAME: ${os.environ['DYNAMODB_BLOG_TABLE_NAME']}`)
    return event.arguments;
};
