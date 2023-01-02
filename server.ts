import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    await prisma.courses.create({
        data: {
            name: "II - Curso Médio de prisma",
            duration: 100,
            description: "Aprendendo um curso de prisma para melhoras as minhas habilidades"
        }
    })

    await prisma.courses.create({
        data: {
            name: "III - Curso Avançado de prisma",
            duration: 150,
            description: "Aprendendo um curso de prisma para melhoras as minhas habilidades"
        }
    })

    await prisma.courses.create({
        data: {
            name: "IV - Curso completo de React",
            duration: 200,
            description: "Aprendendo um curso de prisma para melhoras as minhas habilidades"
        }
    })

    await prisma.courses.create({
        data: {
            name: "IV - Curso completo de Node Js",
            duration: 200,
            description: "Aprendendo um curso de prisma para melhoras as minhas habilidades"
        }
    })
}

main()