import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "George R.R. Martin",
      books: {
        createMany : {
          data: [
            {
              name: "Fogo e Gelo"
            },
            {
              name: "Guerro dos tronos"
            }
          ]
        }
      }
    },
  });

  console.log(result);
}

main();
