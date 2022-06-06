import { config, DynamoDB } from 'aws-sdk'
import { PORT, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, DYNAMODB_REGION } from '@/lib/env'

export const database = () => {
  const dbConfig = {
    endpoint: 'http://host.docker.internal:8000',
    region: DYNAMODB_REGION,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
  }
  config.update(dbConfig)
  const dynamodb = new DynamoDB()
  var params = {
      TableName: 'users',
      Item:{
          'user_id':{N: "1"},
          'name':{S: 'hada'}
      }
  };
  dynamodb.putItem(params, (err, data) => {
    if (err) {
      console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2))
    } else {
      console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2))
    }
  });
}
