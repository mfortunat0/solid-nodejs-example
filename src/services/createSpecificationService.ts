import { ISpecificationRepository } from "../modules/cars/repositories/iSpecification.repositorie";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}
  execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error("Specification alredy exists!!");
    }

    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
