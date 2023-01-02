import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createMany() {
  const result = await prisma.courses.createMany({
    data: Array.from({ length: 10}, (_, index) => (
      {
        name: `Curso de React Native - ${index}`,
        duration: 300,
        description: "Curso excelente de React Native com Rodrigão",
        fk_id_teacher: "56338362-4fc3-4765-a20c-6779eec68289"
      }
    ))
  });

  console.log(result);
}

createMany();
