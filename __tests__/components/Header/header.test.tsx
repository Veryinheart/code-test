import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/app/Header';

describe('Header component', () => {
  test('should render Header', () => {
    render(<Header />);
    const link = screen.getAllByRole('link');
    expect(link).toHaveLength(3);
  });
});
