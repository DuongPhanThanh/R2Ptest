import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/index.jsx';

describe('Home page', () => {
  it('display the home page with payment button', () => {
    const { getByText } = render(<Home locale={'en'} />);
    expect(getByText('home:title_welcome')).toBeInTheDocument();
  });
});
