import { Request, Response } from "express";
import httpStatus from "http-status";
import userService from "../services/user-service";
import { User } from "@prisma/client";

export async function createUser(req: Request, res: Response) {
    const { name, cpf, email, password } = req.body as Pick<User, 'name' | 'cpf' | 'email' | 'password'>;
    const data = { name, cpf, email, password };
    
    try {
        const user = await userService.createUser(data);

        return res.status(httpStatus.CREATED).json({
            id: user.id,
            email: user.email,
          });
    } catch (error) {
        if (error.name === 'invalidExistingDataError') {
            return res.status(httpStatus.CONFLICT).send(error)
        }
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}