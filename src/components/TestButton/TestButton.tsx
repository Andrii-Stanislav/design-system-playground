import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const TestButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);
