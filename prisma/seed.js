import { PrismaClient } from '@prisma/client';

const userData = [
    {
        name: 'Alice',
        email: 'alice@prisma.io'
    }
];

(async () => {
    const prisma = new PrismaClient();

    try {
        console.log(`Start seeding ...`);

        await Promise.all(userData.map((data) => prisma.user.create({ data })));

        console.log(`Seeding finished.`);
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
        process.exit();
    }
})();
