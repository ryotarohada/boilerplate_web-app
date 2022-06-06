FROM amazon/dynamodb-local:latest

EXPOSE 4000

CMD ["-jar", "DynamoDBLocal.jar", "-sharedDb", "-dbPath", ".", "-optimizeDbBeforeStartup"]
