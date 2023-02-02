import { prisma } from "../../prisma";

type CategoryRequest = {
  name: string;
};
export class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (name === "") {
      throw new Error("Name must be provided");
    }

    const category = await prisma.category.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}
