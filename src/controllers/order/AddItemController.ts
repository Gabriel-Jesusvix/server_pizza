import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

export class AddItemController {
  async handle(request: Request, response: Response) {
    const { order_id, product_id, amount } = request.body;
    const addItemService = new AddItemService();

    const addItemOrder = await addItemService.execute({
      order_id,
      product_id,
      amount,
    });

    return response.json(addItemOrder);
  }
}
