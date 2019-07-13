import { Construct, Stack, StackProps, CfnOutput } from '@aws-cdk/core'
import { Vpc } from '@aws-cdk/aws-ec2'
import { Cluster, ContainerImage, CfnTaskDefinition } from '@aws-cdk/aws-ecs'
import { LoadBalancedFargateService } from '@aws-cdk/aws-ecs-patterns'

// :: ---

// :: change this to your desired Docker image
const SERVICE_DOCKER_IMAGE = 'nginxdemos/hello'

// :: this defines our whole application stack
export class FargateStackStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    // :: ---

    // :: create a VPC for this stack
    const vpc = new Vpc(this, 'MyFargateVPC', {
      maxAzs: 3
    })

    // :: create our Fargate deployment in that VPC
    const cluster = new Cluster(this, 'MyFargateCluster', { vpc })

    // :: initialize our service's container image
    const image = ContainerImage.fromRegistry(SERVICE_DOCKER_IMAGE)

    // :: create a load-balanced Fargate service behind a load balancer
    const service = new LoadBalancedFargateService(this, 'MyFargateService', {
      cluster,
      image,
      cpu: 512,
      memoryLimitMiB: 2048,
      publicLoadBalancer: true,
      desiredCount: 6,
      // :: ---
      containerPort: 80
    })

    // :: to make it easier,
    //    let's output the load balancer's DNS name after deployment
    new CfnOutput(this, 'Load Balancer DNS: ', { 
      value: service.loadBalancer.loadBalancerDnsName
    })
  }
}
