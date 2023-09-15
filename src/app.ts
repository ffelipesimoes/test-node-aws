
import * as cdk from '@aws-cdk/core';
import { EthereumStack } from '../lib/ethereumStack';

const app = new cdk.App();
new EthereumStack(app, 'EthereumStack');
