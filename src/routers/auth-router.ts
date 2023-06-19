import { signInPost } from "../controllers/auth-controller";
import { Router } from "express";

const authenticationRouter = Router();

authenticationRouter.post('/sign-in', signInPost)

export { authenticationRouter };
