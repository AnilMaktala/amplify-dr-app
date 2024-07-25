import boto3

dynamodb = boto3.client('dynamodb')

print(dynamodb.list_tables())