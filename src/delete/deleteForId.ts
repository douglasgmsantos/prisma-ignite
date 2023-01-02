import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.coursesModules.delete({
        where: {
            id : "69736955-6010-4447-8b81-2df79744d35b"
        }
    })

    console.log('result', result)
}

main()