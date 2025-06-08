import { findTopCustomer } from '../find-top-customer';

describe('findTopCustomer', () => {
  it('should return the top customer', () => {
    const items = [
      { customer: 'John', amount: 100, id: '1' },
      { customer: 'Jane', amount: 200, id: '2' },
    ];

    const topCustomer = findTopCustomer(items);

    expect(topCustomer).toBe('Jane');
  });

  it('should return the top customer when there are multiple customers with the same amount', () => {
    const items = [
      { customer: 'John', amount: 100, id: '1' },
      { customer: 'Jane', amount: 100, id: '2' },
    ];

    const topCustomer = findTopCustomer(items);

    expect(topCustomer).toBe('John');
  });
});
