import { postCompany } from "../controllers/sign-up-controller";
import { Router } from "express";
import { validateBody } from "../middlewares/validation-middleware";
import { companySchema } from "../schemas";

const companyRouter = Router();

companyRouter.post('/sign-up', validateBody(companySchema), postCompany);

export { companyRouter };
