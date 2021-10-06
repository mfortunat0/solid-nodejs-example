import { SpecificationsRepsotiry } from "../../repositories/implementations/specification.repositorie";
import { CreateSpecificationUseCase } from "./createSpecificationUseCase";
import { CreateSpecificationController } from "./creteSpecificationController";

const specificationRepository = new SpecificationsRepsotiry();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
