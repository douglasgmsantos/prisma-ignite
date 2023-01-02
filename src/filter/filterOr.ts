import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const result = await prisma.courses.findMany({
    where: {
      OR: [
        {
          name: {
            startsWith: 'cUrso',
            mode: "insensitive"
          },
        },
        {
          name: {
            contains: 'react',
            mode: "insensitive"
          },
        },
      ],
      AND: {
        duration: 300
      }
    }
  })

  console.log('result', result)
}

main()