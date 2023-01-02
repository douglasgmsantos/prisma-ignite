import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React Native",
      duration: 300,
      description: "Curso excelente de React Native com Rodrigão",
      teacher: {
        connectOrCreate: {
          where : {
            name: "DOUGLAS GABRIEL MOTA DOS SANTOS"
          },
          create: {
            name: "DOUGLAS GABRIEL MOTA DOS SANTOS"
          }
        }
      }
    },
  });

  console.log(result);
}

main()