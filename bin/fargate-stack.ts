#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { FargateStackStack } from '../lib/fargate-stack-stack';

const app = new cdk.App();
new FargateStackStack(app, 'FargateStackStack');
