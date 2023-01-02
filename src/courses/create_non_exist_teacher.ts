import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Node JS",
      duration: 300,
      description: "Curso excelente de Node JS com Rodrigão",
      teacher: {
        create: {
          name: 'JESSICA CRISTINE DE JESUS'
        }
      }
    },
  });

  console.log(result);
}

main();
