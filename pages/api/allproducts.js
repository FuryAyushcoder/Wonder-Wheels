// File: pages/api/allproducts.js

import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const products = await prisma.product.findMany(); // Fetch products from database
      res.status(200).json(products); // Return products as JSON response
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
