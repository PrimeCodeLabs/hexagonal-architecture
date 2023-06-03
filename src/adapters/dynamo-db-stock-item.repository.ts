import { DynamoDB } from "aws-sdk";
import { StockItem } from "../domains/stock-item";
import { StockItemRepository } from "../ports/stock-item.repository";

const dynamoDb = new DynamoDB.DocumentClient();

export class DynamoDbStockItemRepository implements StockItemRepository {
  save(stockItem: StockItem): Promise<void> {
    throw new Error("Method not implemented.");
  }
  update(stockItem: StockItem): Promise<void> {
    throw new Error("Method not implemented.");
  }
  remove(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async get(id: string): Promise<StockItem> {
    const result = await dynamoDb
      .get({
        TableName: process.env.STOCK_TABLE as string,
        Key: { id },
      })
      .promise();
    return result.Item as StockItem;
  }

  // similar implementations for save(), update(), remove()
}
