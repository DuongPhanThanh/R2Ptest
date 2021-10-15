import { render, screen } from '@testing-library/react';
import React from 'react';

import Payment from '../../pages/payment';

describe('Home page', () => {
  it('display the payment page with plural', () => {
    render(<Payment locale="en-GB" />);

    const text = screen.getByText('plural:person');
    expect(text).toBeInTheDocument();
  });
});
