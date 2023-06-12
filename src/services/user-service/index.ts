import bcrypt from 'bcrypt';
import userRepository from '../../repositories/user-repository';
import { User } from '@prisma/client';

export async function createUser(data): Promise<User> {
    await validateUniqueEmailOrFail(data.email)

    const hashedPassword = await bcrypt.hash(data.password, 12);
    return await userRepository.create({
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        password: hashedPassword,
    });
}

async function validateUniqueEmailOrFail(email: string) {
    const userWithSameEmail = await userRepository.findByEmail
}

const userService = {
    createUser,
}

export default userService;