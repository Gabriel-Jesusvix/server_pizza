import { Request, Response } from "express";
import { ListOrderItemsService } from "../../services/order/ListOrderItemsService";

export class ListOrderItemsController {
  async handle(request: Request, response: Response) {
    const listOrderItems = new ListOrderItemsService();

    const listOrders = await listOrderItems.execute();

    return response.json(listOrders);
  }
}
