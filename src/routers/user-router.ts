import { postUser } from "../controllers/sign-up-controller";
import { Router } from "express";
import { validateBody } from "../middlewares/validation-middleware";
import { userSchema } from "../schemas";

const userRouter = Router();

userRouter.post('/sign-up', validateBody(userSchema), postUser);

export { userRouter };