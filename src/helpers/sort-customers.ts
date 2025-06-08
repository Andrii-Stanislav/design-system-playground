import { type TransactionItem } from '../types';

export const sortCustomers = (items: TransactionItem[]) => {
  return [...items].sort((a, b) => b.amount - a.amount);
};
