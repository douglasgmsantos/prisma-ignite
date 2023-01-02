import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.findMany({
        where: {
            id : "3200fdb0-7c18-42d8-8e64-d519672274a8"
        },
        include: {
            modules: true
        }
    })

    console.log('result', JSON.stringify(result))
}

main()