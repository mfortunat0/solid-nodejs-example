import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/categories.repositorie";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return response.json(categoriesRepository.list());
});

export { categoriesRoutes };
