import { Category } from "../../model/category";
import { ICategoriesRepository } from "../../repositories/iCategories.repositorie";

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}

export { ListCategoryUseCase };
