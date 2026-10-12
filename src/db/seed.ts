import prisma from "./prisma.js";

async function main() {
    await prisma.user.createMany({
        data: [
            {
                email: "test1@email.com"
            },
            {
                email: "test2@email.com"
            },
            {
                email: "test3@email.com"
            }
        ]
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });