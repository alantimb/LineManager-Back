import { prisma } from "../../config/database";

async function create(data) {
  return prisma.session.create({
    data,
  });
}

const sessionRepository = {
  create,
};

export default sessionRepository;
