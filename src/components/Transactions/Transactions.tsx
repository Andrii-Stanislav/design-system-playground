import { useMemo } from 'react';

import { type TransactionsProps } from './Transactions.types';
import { findTopCustomer } from '../../helpers/find-top-customer';

import styles from './Transactions.module.css';

export const Transactions = ({ items, search }: TransactionsProps) => {
  const filteredItems = useMemo(() => {
    if (!search) return items;

    return items.filter(item => item.customer?.toLowerCase().includes(search));
  }, [search, items]);

  const topCustomerName = useMemo(() => findTopCustomer(filteredItems), [filteredItems]);

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>
          <span
            className={topCustomerName === item.customer ? styles.topCustomer : styles.listItem}
          >
            {item.customer}
          </span>
          - {item.amount}
        </li>
      ))}
    </ul>
  );
};
