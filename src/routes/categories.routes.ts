import { Router } from "express";
import { CategoriesRepository } from "../repositories/categories.repositorie";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  categoriesRepository.create({ name, description });
  return response.status(201).send();
});

export { categoriesRoutes };