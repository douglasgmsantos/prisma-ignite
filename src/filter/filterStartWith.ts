import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const result = await prisma.courses.findMany({
    where: {
        name: {
            startsWith: 'cUrso',
            mode: "insensitive"
        }
    }
  })

  console.log('result', result)
}

main()