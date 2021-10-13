import { render, screen } from '@testing-library/react';
import React from 'react';

import Home from '../../pages/index';

describe('Home page', () => {
  it('display the home page with payment button', () => {
    render(<Home locale="en-GB" />);

    const text = screen.getByText('homepage:title_welcome');
    expect(text).toBeInTheDocument();
  });
});
