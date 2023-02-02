import { Request, Response } from "express";
import { RemoveItemOrderService } from "../../services/order/RemoveItemOrderService";

export class RemoveItemOrderController {
  async handle(request: Request, response: Response) {
    const product_Id = request.query.product_Id as string;
    const removeItemOrderService = new RemoveItemOrderService();

    const removeItemOrder = await removeItemOrderService.execute({
      product_Id,
    });

    return response.json(removeItemOrder);
  }
}
