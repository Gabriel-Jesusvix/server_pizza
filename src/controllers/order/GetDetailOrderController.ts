import { Request, Response } from "express";
import { GetDetailOrderService } from "../../services/order/GetDetailOrderService";

export class GetDetailOrderController {
  async handle(request: Request, response: Response) {
    const order_id = request.params.order_id as string;
    const getDetailOrderService = new GetDetailOrderService();

    const detailOrders = await getDetailOrderService.execute({
      order_id,
    });

    return response.json(detailOrders);
  }
}
