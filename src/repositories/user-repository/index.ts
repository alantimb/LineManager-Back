import { prisma } from "../../config/database";


async function findByEmail(email: string) {
    return await prisma.user.findFirst({
        where: {
            email: email
        }
    })
}

async function create(data) {
    return prisma.user.create({
        data
    })
}

const userRepository = {
    findByEmail,
    create
}

export default userRepository;
