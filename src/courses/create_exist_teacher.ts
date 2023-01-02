import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React JS",
      duration: 300,
      description: "Curso excelente de React JS com Rodrigão",
      teacher: {
        connect: {
          id: 'ce2eaf23-fa83-4e79-b181-1b301e97f813'
        }
      }
    },
  });

  console.log(result);
}

main();
