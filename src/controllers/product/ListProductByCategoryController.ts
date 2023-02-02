import { prisma } from "../../prisma";
import { Request, Response } from "express";

import { ListProductByCategoryService } from "../../services/product/ListProductByCategoryService";

export class ListProductByCategoryController {
  async handle(request: Request, response: Response) {
    const category_Id = request.query.category_Id as string;

    const listProductByCategoryService = new ListProductByCategoryService();

    const productFiltered = await listProductByCategoryService.execute({
      category_Id,
    });

    return response.json(productFiltered);
  }
}
