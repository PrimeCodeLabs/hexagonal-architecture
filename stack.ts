import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigateway from "@aws-cdk/aws-apigateway";
import * as dynamodb from "@aws-cdk/aws-dynamodb";

export class StockManagementSystemStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Creates a DynamoDB table
    const table = new dynamodb.Table(this, "StockTable", {
      partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
    });

    const getHandler = new lambda.Function(this, "GetHandler", {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset("src/adapters"),
      handler: "handlers.get",
      environment: {
        STOCK_TABLE: table.tableName,
      },
    });

    // Add other handlers here (POST, PUT, DELETE)

    table.grantReadWriteData(getHandler);
    // Grant permissions to other handlers

    // Creates an API Gateway REST API
    const api = new apigateway.RestApi(this, "Endpoint");

    const stockItemResource = api.root.addResource("{id}");
    stockItemResource.addMethod(
      "GET",
      new apigateway.LambdaIntegration(getHandler)
    );

    // Add methods for other operations (POST, PUT, DELETE)
  }
}
