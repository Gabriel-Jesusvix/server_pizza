import { prisma } from "../../prisma";

type ProductRequest = {
  name: string;
  price: string;
  description: string;
  banner_url: string;
  category_id: string;
};

export class CreateProductService {
  async execute({
    name,
    price,
    description,
    banner_url,
    category_id,
  }: ProductRequest) {
    const product = await prisma.product.create({
      data: {
        name,
        price,
        description,
        category_Id: category_id,
        banner: banner_url,
      },
    });

    return product;
  }
}
