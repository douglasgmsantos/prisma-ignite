import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "3200fdb0-7c18-42d8-8e64-d519672274a8",
      fk_id_module: "c395917b-8b84-4a19-8876-d9d7cf08f4a3"
    }
  })

  console.log('result', result)
}

main()