const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3");

const client = new S3Client();

const bucketName = process.env.BUCKET;

const lambdaHandler = async (event, context) => {
  console.log("entering lambda");

  try {
    const input = {
      Bucket: bucketName,
    };
    const command = new ListObjectsCommand(input);
    const response = await client.send(command);
    console.log(JSON.stringify(response));
  } catch (error) {
    return {
      statusCode: 400,
      header: {},
      body: JSON.stringify("opps..."),
    };
  }
};

module.exports = { lambdaHandler };
