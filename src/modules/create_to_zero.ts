import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const result = await prisma.coursesModules.create({
    data: {
      courses: {
        create: {
          duration: 200,
          name: "Curso Completo de Prisma",
          description: "Curso Completo de Prisma",
          teacher: {
            create: {
              name: "Fabiana Santos"
            }
          }
        }
      },
      modules: {
        create: {
          name: "Módulo de Express",
          description: "Aprendendo express js"
        }
      }
    }
  })

  console.log('result', result)
}

main()