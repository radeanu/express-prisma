import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const user = await prisma.user.findMany();

        return res.status(200).json(user);
    } catch (err) {
        return res.status(418).json({ message: err.message });
    }
});

export default router;
