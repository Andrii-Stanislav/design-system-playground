import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TestButton } from './TestButton';
import { jest } from '@jest/globals';

describe('TestButton', () => {
  it('renders with the correct label', () => {
    render(<TestButton label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<TestButton label="Click me" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders without onClick handler', () => {
    render(<TestButton label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
