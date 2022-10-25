import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { GuiOneVideo } from './index';

describe('<GuiOneVideo />', () => {
  it('render GuiOneVideo with dumi', () => {
    const msg = 'dumi';

    render(<GuiOneVideo src={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
