import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MsgBox from './MsgBox';

describe('<MsgBox />', () => {
  test('it should mount', () => {
    render(<MsgBox />);
    
    const msgBox = screen.getByTestId('MsgBox');

    expect(msgBox).toBeInTheDocument();
  });
});