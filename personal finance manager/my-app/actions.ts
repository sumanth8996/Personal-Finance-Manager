'use server'

import { prisma } from '../db'

export async function addTransaction(data: {
  type: 'income' | 'expense'
  category: string
  amount: number
  description: string
}) {
  return prisma.transaction.create({
    data
  })
}

export async function getTransactions() {
  return prisma.transaction.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
}