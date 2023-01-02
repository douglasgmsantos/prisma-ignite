import { PrismaClient, Prisma, Modules} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.$queryRaw<Modules[]>(
        Prisma.sql`SELECT * FROM modules`
    )

    result.map(({ name }) => console.log('name', name))  
}

main();
