import { Request, Response } from "express";
import { ListCategoryUseCase } from "./listCategoryUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(request: Request, response: Response) {
    return response.json(this.listCategoryUseCase.execute());
  }
}

export { ListCategoryController };
