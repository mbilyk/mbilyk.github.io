import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StateManager from './StateManager';

describe('<StateManager />', () => {
  test('it should mount', () => {
    render(<StateManager />);
    
    const stateManager = screen.getByTestId('StateManager');

    expect(stateManager).toBeInTheDocument();
  });
});