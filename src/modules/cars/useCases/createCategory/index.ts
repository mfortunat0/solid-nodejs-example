import { CategoriesRepository } from "../../repositories/implementations/categories.repositorie";
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCase } from "./createCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
export { createCategoryController };
