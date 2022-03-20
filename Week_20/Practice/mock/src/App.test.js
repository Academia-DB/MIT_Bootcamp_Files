import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./MyComponent', () => ()=> (<div>Hello World</div>));

test('mocking test', () => {
  const {container} = render(<App/>);
  expect(container.textContext).toMatch('Hello World');
});
