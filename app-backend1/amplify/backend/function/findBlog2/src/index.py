import json
import boto3
import os

dynamodb = boto3.client('dynamodb')

def handler(event, context):
  print('received event:')
  print(event)
  print(os.environ['DYNAMODB_BLOG_TABLE_NAME'])

  response = dynamodb.get_item(
    TableName=os.environ['DYNAMODB_BLOG_TABLE_NAME'],
    Key={
      'id': {
        'S': event['arguments']['blogid']
      }
    }
  )

  print('ddb response: ' + json.dumps(response))
  
  return json.dumps(response['Item'])