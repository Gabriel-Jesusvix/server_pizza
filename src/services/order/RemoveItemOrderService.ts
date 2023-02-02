import { prisma } from "../../prisma";

type RemoveItemOrderRequest = {
  product_Id: string;
};
export class RemoveItemOrderService {
  async execute({ product_Id }: RemoveItemOrderRequest) {
    const order = await prisma.orderItem.delete({
      where: {
        id: product_Id,
      },
    });

    return order;
  }
}
