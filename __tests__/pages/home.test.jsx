import { render } from '@testing-library/react';
import React from 'react';

import Home from '../../pages/index';

describe('Home page', () => {
  it('display the home page with payment button', () => {
    const screen = render(<Home locale="en" />);

    const text = screen.getByText('home:title_welcome');
    expect(text).toBeInTheDocument();
  });
});
