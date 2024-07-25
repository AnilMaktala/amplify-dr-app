import boto3

s3client = boto3.client('s3')

response = s3client.list_objects_v2(
    #Bucket='275727400916-amplify-ippm2vv63bc4fgvcrlylyiwnre-dev-us-east-1'
    Bucket='arn:aws:s3::275727400916:accesspoint/m6foxw3gpgntu.mrap'
)

print(response)