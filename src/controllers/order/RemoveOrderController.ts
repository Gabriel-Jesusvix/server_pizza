import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

export class RemoveOrderController {
  async handle(request: Request, response: Response) {
    const order_id = request.query.order_id as string;

    const removeOrderService = new RemoveOrderService();

    const removeOrder = await removeOrderService.execute({
      order_id,
    });

    return response.json(removeOrder);
  }
}
