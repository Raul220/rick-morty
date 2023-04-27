/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    // <Provider stor<e={}>
    //   <App />
    // </Provider>>
    <></>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
