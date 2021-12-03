import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Placeholder from './Placeholder';

describe('<Placeholder />', () => {
  test('it should mount', () => {
    render(<Placeholder />);
    
    const placeholder = screen.getByTestId('Placeholder');

    expect(placeholder).toBeInTheDocument();
  });
});