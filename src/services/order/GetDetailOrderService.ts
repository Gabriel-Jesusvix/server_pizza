import { prisma } from "../../prisma";

type DetailRequest = {
  order_id: string;
};
export class GetDetailOrderService {
  async execute({ order_id }: DetailRequest) {
    const orders = await prisma.orderItem.findMany({
      where: {
        id: order_id,
      },
      include: {
        Product: true,
        Order: true,
      },
    });

    return orders;
  }
}
