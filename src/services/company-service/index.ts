import bcrypt from 'bcrypt';
import { Company } from '@prisma/client';
import { invalidExistingDataError } from '../../errors/invalid-existing-data-error';
import companyRepository from '../../repositories/company-repository';

export async function createCompany(data): Promise<Company> {
    await validateUniqueDataOrFail(data.email, data.cnpj);

    const hashedPassword = await bcrypt.hash(data.password, 12);

    return await companyRepository.create({
        name: data.name,
        cnpj: data.cnpj,
        email: data.email,
        password: hashedPassword,
    });
}

async function validateUniqueDataOrFail(email: string, cnpj: string) {
    const companyWithSameEmail = await companyRepository.findByEmail(email);
    const companyWithSameCnpj = await companyRepository.findByCnpj(cnpj);
    let message: string;

    if (companyWithSameEmail) {
        message = email;
        throw invalidExistingDataError(email, cnpj, message);
    }

    if (companyWithSameCnpj) {
        message = cnpj;
        throw invalidExistingDataError(email, cnpj, message);
    }
}

const companyService = {
    createCompany,
}

export default companyService;