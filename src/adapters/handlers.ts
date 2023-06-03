import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { DynamoDbStockItemRepository } from "./dynamo-db-stock-item.repository";

const repository = new DynamoDbStockItemRepository();

export const get = async (event: APIGatewayProxyEvent, context: Context) => {
  const id = event?.pathParameters?.id;
  if (!id) {
    return { statusCode: 400, body: "Missing id" };
  }
  const stockItem = await repository.get(id);
  return { statusCode: 200, body: JSON.stringify(stockItem) };
};
