import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

export class SendOrderController {
  async handle(request: Request, response: Response) {
    const { order_id } = request.body;
    const sendOrderService = new SendOrderService();

    const sendOrder = await sendOrderService.execute({
      order_id,
    });

    return response.json(sendOrder);
  }
}
