import { StockItem } from "../domains/stock-item";

export interface StockItemRepository {
  get(id: string): Promise<StockItem>;
  save(stockItem: StockItem): Promise<void>;
  update(stockItem: StockItem): Promise<void>;
  remove(id: string): Promise<void>;
}
