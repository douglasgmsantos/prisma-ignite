import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Javascript",
      duration: 300,
      description: "Curso excelente de Javascript",
      fk_id_teacher: "bad568e0-2b18-4655-9c2a-fea9394650ee"
    },
  });

  console.log(result);
}

main();
