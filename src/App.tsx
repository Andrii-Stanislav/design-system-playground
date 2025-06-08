import { useState, useMemo, Suspense, useCallback } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Transactions, TestButton } from './components';
import { transactions } from './test-data/transactons';

function App() {
  const [search, setSearch] = useState('');

  const searchValue = useMemo(() => search?.trim()?.toLowerCase(), [search]);

  const clearSearch = useCallback(() => setSearch(''), []);

  return (
    <>
      <label htmlFor="search">Filter</label>
      <input id="search" value={search} onChange={e => setSearch(e.target.value)} />
      <Transactions items={transactions} search={searchValue} />

      <div>
        <ErrorBoundary fallback={<>Error</>}>
          <TestButton label="Clear with error" />
        </ErrorBoundary>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <TestButton onClick={clearSearch} label="Clear" />
      </Suspense>
    </>
  );
}

export default App;
