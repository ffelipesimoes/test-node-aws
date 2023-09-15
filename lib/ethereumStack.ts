import * as cdk from '@aws-cdk/core';
import * as sqs from '@aws-cdk/aws-sqs';
import * as lambda from '@aws-cdk/aws-lambda';
import * as lambdaEventSources from '@aws-cdk/aws-lambda-event-sources';


export class EthereumStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'EthereumTxQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    const alchemyApiKey = process.env.ALCHEMY_API_KEY || ''; 
    const web3ProviderUrl = process.env.WEB3_PROVIDER_URL || ''; 


    const lambdaFunction = new lambda.Function(this, 'EthereumTxHandler', {
      functionName: "EthereumTxHandler",
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'index.handler',
      environment: {
        SQS_QUEUE_URL: queue.queueUrl,
        ALCHEMY_API_KEY: alchemyApiKey,
        WEB3_PROVIDER_URL: web3ProviderUrl,
      }
      
    });

    lambdaFunction.addEventSource(new lambdaEventSources.SqsEventSource(queue));

    queue.grantConsumeMessages(lambdaFunction);
  }
}
