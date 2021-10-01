import React from 'react';
import { render } from '@testing-library/react';
import Payment from '../../pages/payment.jsx';

describe('Payment page', () => {
  it('display payment title', () => {
    const { getByText } = render(<Payment locale={'en'} />);
    expect(getByText('payment:payment_title')).toBeInTheDocument();
  });
});
