import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "714b61d8-ecbd-4391-b801-af7b67c9825b",
    },
    data: {
      duration: 250,
      name: "Curso de Prisma Completo",
    },
  });

  console.log(result);
}

main();
