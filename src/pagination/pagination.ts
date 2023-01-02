import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    let skip = 0
    const take = 2
    let exist = true
    
    while(exist){
        const result = await prisma.courses.findMany({
            skip,
            take
        })

        console.log(`Skip ${skip}`, result)
        skip += take
        if(!result.length) exist = false
    }
}

main();
