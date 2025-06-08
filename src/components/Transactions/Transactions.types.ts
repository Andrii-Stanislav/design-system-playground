import { type TransactionItem } from '../../types';

export interface TransactionsProps {
  search?: string;
  items: TransactionItem[];
}
