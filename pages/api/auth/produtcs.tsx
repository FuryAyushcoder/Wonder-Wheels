// File: pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/app/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const products = await prisma.listing.findMany();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
