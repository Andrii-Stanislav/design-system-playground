import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    // basic assertion to verify the test is working
    expect(document.body).toBeTruthy();
  });
});
