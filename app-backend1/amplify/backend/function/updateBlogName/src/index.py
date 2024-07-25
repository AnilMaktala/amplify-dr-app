import json
import boto3
import os

dynamodb = boto3.client('dynamodb')

def handler(event, context):
  print('received event:')
  print(event)
  print(os.environ['DYNAMODB_BLOG_TABLE_NAME'])

  response = dynamodb.update_item(
    TableName=os.environ['DYNAMODB_BLOG_TABLE_NAME'],
    Key={
      'id': {
        'S': event['arguments']['blogid']
      }
    },
    UpdateExpression="SET #n = :n",
    ExpressionAttributeNames={
      '#n': 'name'
    },
    ExpressionAttributeValues={
      ':n': {
        'S': event['arguments']['blogName']
      }
    }
  )

  print('ddb response: ' + json.dumps(response))

  response = dynamodb.get_item(
    TableName=os.environ['DYNAMODB_BLOG_TABLE_NAME'],
    Key={
      'id': {
        'S': event['arguments']['blogid']
      }
    },
    ConsistentRead=True
  )

  print('ddb response: ' + json.dumps(response))
  
  return json.dumps(response['Item'])