import bcrypt from 'bcrypt';
import userRepository from '../../repositories/user-repository';
import { User } from '@prisma/client';
import { invalidExistingDataError } from '../../errors/invalid-existing-data-error';

export async function createUser(data): Promise<User> {
    await validateUniqueDataOrFail(data.email, data.cpf);

    const hashedPassword = await bcrypt.hash(data.password, 12);

    return await userRepository.create({
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        password: hashedPassword,
    });
}

async function validateUniqueDataOrFail(email: string, cpf: string) {
    const userWithSameEmail = await userRepository.findByEmail(email);
    const userWithSameCpf = await userRepository.findByCpf(cpf);
    let message: string;

    if (userWithSameEmail) {
        message = email;
        throw invalidExistingDataError(email, cpf, message);
    }

    if (userWithSameCpf) {
        message = cpf;
        throw invalidExistingDataError(email, cpf, message);
    }
}

const userService = {
    createUser,
}

export default userService;