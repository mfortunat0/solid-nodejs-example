import { Router } from "express";
import { SpecificationsRepsotiry } from "../modules/cars/repositories/specification.repositorie";
import { CreateSpecificationService } from "../services/createSpecificationService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationsRepsotiry();

specificationRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationRoutes };
