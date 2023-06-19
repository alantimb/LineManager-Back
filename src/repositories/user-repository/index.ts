import { User } from "protocols";
import { prisma } from "../../config/database";


async function findByEmail(email: string) {
    return await prisma.user.findFirst({
        where: {
            email: email
        }
    })
}

async function findByCpf(cpf: string) {
    return await prisma.user.findFirst({
        where: {
            cpf: cpf
        }
    })
}

async function create(data: User) {
    return prisma.user.create({
        data
    })
}

const userRepository = {
    findByEmail,
    findByCpf,
    create
}

export default userRepository;
