import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const result = await prisma.modules.create({
    data: {
      name : "Firebase",
      description: "Aprendendo firebase do zero",
      courses: {
        create: {
          courses: {
            connect: {
              id: "3200fdb0-7c18-42d8-8e64-d519672274a8"
            }
          }
        }
      }
    }
  })

  console.log('result', result)
}

main()