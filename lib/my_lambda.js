const { Function, Runtime, Code } = require("aws-cdk-lib/aws-lambda");
const { Bucket } = require("aws-cdk-lib/aws-s3");
const { Construct } = require("constructs");

class MyLambda extends Construct {
  constructor(scope, id) {
    super(scope, id);

    const bucket = new Bucket(this, "Store");

    const handler = new Function(this, "lambdaHandler", {
      runtime: Runtime.NODEJS_18_X,
      handler: "lambda.lambdaHandler",
      code: Code.fromAsset("resources"),
      environment: {
        BUCKET: bucket.bucketName,
      },
    });

    bucket.grantReadWrite(handler);
  }
}

module.exports = { MyLambda };
