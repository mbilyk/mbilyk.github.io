import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Opening from './Opening';

describe('<Opening />', () => {
  test('it should mount', () => {
    render(<Opening />);
    
    const opening = screen.getByTestId('Opening');

    expect(opening).toBeInTheDocument();
  });
});