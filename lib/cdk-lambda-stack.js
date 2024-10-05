const { Stack, Duration } = require('aws-cdk-lib');
// const sqs = require('aws-cdk-lib/aws-sqs');

const { MyLambda } = require('./my_lambda')
class CdkLambdaStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new MyLambda(this, 'MyLambda')

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkLambdaQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });
  }
}

module.exports = { CdkLambdaStack }
