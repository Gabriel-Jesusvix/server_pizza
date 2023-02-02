import { prisma } from "../../prisma";

type ProductRequest = {
  category_Id: string;
};
export class ListProductByCategoryService {
  async execute({ category_Id }: ProductRequest) {
    const findByCategory = await prisma.product.findMany({
      where: { category_Id },
    });
    return findByCategory;
  }
}
