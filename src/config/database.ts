import { PrismaClient } from "@prisma/client";

export let prisma: PrismaClient;
function connectDb(): void {
    prisma = new PrismaClient();
}

async function disconnectDB(): Promise<void> {
    await prisma?.$disconnect();
  }

const databaseConnections = {
    connectDb,
    disconnectDB
}

export default databaseConnections;
