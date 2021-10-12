import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputBox from './InputBox';

describe('<InputBox />', () => {
  test('it should mount', () => {
    render(<InputBox />);
    
    const inputBox = screen.getByTestId('InputBox');

    expect(inputBox).toBeInTheDocument();
  });
});