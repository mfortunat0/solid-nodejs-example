import { Category } from "../model/category";

type CategoryDTO = {
  name: string;
  description: string;
};

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: CategoryDTO) {
    const category: Category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
    this.categories.push(category);
  }
}

export { CategoriesRepository };
