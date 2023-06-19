import { Request, Response } from "express";
import httpStatus from "http-status";
import { User } from "protocols";
import authenticationService from "../services/authentication-service";

export async function signInPost(req: Request, res: Response) {
    const { email, password } = req.body as Pick<User, 'email' | 'password'>;
    
    try {
        const result = await authenticationService.signIn({ email, password });

        return res.status(httpStatus.OK).send(result);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}