import { prisma } from "../../prisma";

type FinishRequest = {
  order_id: string;
};
export class FinishOrderService {
  async execute({ order_id }: FinishRequest) {
    const order = await prisma.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    });

    return order;
  }
}
