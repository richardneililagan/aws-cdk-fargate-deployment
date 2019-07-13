AWS CDK - Simple AWS Fargate deployment
===

Create an AWS Fargate deployment across 3 availability zones,
and run a single service on it.

[Detailed instructions here](https://docs.aws.amazon.com/cdk/latest/guide/ecs_example.html).

## What is this?

The [AWS Cloud Development Kit](https://https://github.com/aws/aws-cdk) 
(AWS CDK) is a framework for defining infrastructure using fluent code.

Unlike [AWS CloudFormation](https://aws.amazon.com/cloudformation) which uses
JSON or YAML, the AWS CDK uses programming languages, like Typescript, 
Javascript, Python, C#, and Java, to describe infrastructure and
relationships betweek components.

## What does this deployment do?

1. Creates a VPC with 3 availability zones
2. Creates a Fargate deployment in that VPC
3. Creates a Fargate service in that deployment, using a Docker image of
   your choice, behind a public-facing load balancer

   a. Each container will have `512m` CPU

   b. Each container will have `2GB` allocated memory

   c. The service will run 6 container instances behind the load balancer.

## Usage

1. Install the AWS CDK.

```
npm i -g aws-cdk
cdk --version   # :: check if correctly installed
```

2. Clone this repository.

```
git clone https://github.com/richardneililagan/aws-cdk-fargate-deployment.git
```

3. Build and deploy the application stack.

```
npm run build
cdk deploy
```

---

## What what why why what what why why

> [Be more constructive with your feedback](https://youtu.be/sOgC8qp_I2Y)

- [AWS Fargate](https://aws.amazon.com/fargate) allows you to orchestrate
  the running of fleets of (Docker) containers, without having to manage
  the servers or virtual machines that they will run on top of.

- A **VPC** is an virtual private cloud, and 
  [Amazon VPC](https://aws.amazon.com/vpc) allows you to create logically 
  isolated networks on the AWS cloud

- [Availability Zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones)
  are fully isolated partitions of the AWS Global Infrastructure, and are 
  inter-connected with high-bandwidth, low-latency networking. 
  [More information here](https://infrastructure.aws).

--- 

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

---

> Github [@richardneililagan](https://github.com/richardneililagan)  ·  Twitter [@techlifemusic](https://twitter.com/techlifemusic)
