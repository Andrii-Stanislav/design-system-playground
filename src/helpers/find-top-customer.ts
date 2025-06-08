import { type TransactionItem } from '../types';

export const findTopCustomer = (items: TransactionItem[]): string | null => {
  const groupedCustomers = items.reduce(
    (acc, item) => ({ ...acc, [item.customer]: item.amount + (acc?.[item?.customer] ?? 0) }),
    {} as Record<string, number>
  );

  let topCustomer: null | string = null;
  let topTotal = 0;

  Object.entries(groupedCustomers).forEach(([customerName, total]) => {
    if (total > topTotal) {
      topCustomer = customerName;
      topTotal = total;
    }
  });

  return topCustomer;
};
