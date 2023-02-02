import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, price, description, category_id } = request.body;

    const createProductService = new CreateProductService();
    if (!request.file) {
      throw new Error("Error creating product");
    } else {
      const { originalname, filename: banner_url } = request.file;
      const product = await createProductService.execute({
        name,
        price,
        description,
        category_id,
        banner_url,
      });

      return response.json(product);
    }
  }
}
