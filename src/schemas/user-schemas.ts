import Joi from "joi";
import { User } from "protocols";

export const userSchema = Joi.object<User>({
    cpf: Joi.string().length(11).required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

export const companySchema = Joi.object({
    cnpj: Joi.string().length(14).required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()    
});
