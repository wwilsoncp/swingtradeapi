// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/utils/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  }
  if (req.method === 'POST') {
    const { name, email } = req.body
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    })
    res.status(201).json(user)
  } else {
    res.status(401).json({ message: 'method not allowed' })
  }
}
