import { prisma } from "../../prisma";

type OrderRequest = {
  table: number;
  name: string;
};
export class CreateOrderService {
  async execute({ table, name }: OrderRequest) {
    const order = await prisma.order.create({
      data: {
        table,
        name,
      },
    });

    return order;
  }
}
