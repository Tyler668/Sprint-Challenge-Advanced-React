import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent} from '@testing-library/jest-dom';
import PlayerCards  from './components/PlayerCards';
import * as rtl from '@testing-library/react';
import 'jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders player cards correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerCards />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('basic math', () =>{
  expect(1+1).toBe(2);
})

// test('dark mode adds the dark mode class', () => {

// })