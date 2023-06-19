import { Request, Response } from "express";
import httpStatus from "http-status";
import userService from "../services/user-service";
import { Company, User } from "@prisma/client";
import companyService from "../services/company-service";

export async function postUser(req: Request, res: Response) {
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

export async function postCompany(req: Request, res: Response) {
    const { name, cnpj, email, password } = req.body as Pick<Company, 'name' | 'cnpj' | 'email' | 'password'>;
    const data = { name, cnpj, email, password };
    
    try {
        const company = await companyService.createCompany(data);

        return res.status(httpStatus.CREATED).json({
            id: company.id,
            email: company.email,
          });
    } catch (error) {
        if (error.name === 'invalidExistingDataError') {
            return res.status(httpStatus.CONFLICT).send(error)
        }
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}