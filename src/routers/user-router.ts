import { createUser } from "../controllers/user-controller";
import { Router } from "express";
import { validateBody } from "../middlewares/validation-middleware";
import { userSchema } from "../schemas";

const userRouter = Router();

userRouter.post('/sign-up', validateBody(userSchema), createUser);

export { userRouter };