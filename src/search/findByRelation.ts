import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.coursesModules.findMany({
        include: {
            modules: true,
            courses: true
        }
    })

    console.log('result', JSON.stringify(result))
}

main()