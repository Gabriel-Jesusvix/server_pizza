import { prisma } from "../../prisma";

type OrderAddItemRequest = {
  order_id: string;
  product_id: string;
  amount: number;
};
export class AddItemService {
  async execute({ order_id, product_id, amount }: OrderAddItemRequest) {
    const order = await prisma.orderItem.create({
      data: {
        order_Id: order_id,
        product_Id: product_id,
        amount,
      },
    });

    return order;
  }
}
