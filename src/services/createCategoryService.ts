import { CategoriesRepository } from "../modules/cars/repositories/categories.repositorie";
import { ICategoriesRepository } from "../modules/cars/repositories/iCategories.repositorie";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ name, description }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
