import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./createCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryUseCase) {}
  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    this.createCategoryService.execute({
      name,
      description,
    });
    return response.status(201).send();
  }
}

export { CreateCategoryController };