import { Company } from "protocols";
import { prisma } from "../../config/database";


async function findByEmail(email: string) {
    return await prisma.company.findFirst({
        where: {
            email: email
        }
    })
}

async function findByCnpj(cnpj: string) {
    return await prisma.company.findFirst({
        where: {
            cnpj: cnpj
        }
    })
}

async function create(data: Company) {
    return prisma.company.create({
        data
    })
}

const companyRepository = {
    findByEmail,
    findByCnpj,
    create
}

export default companyRepository;
