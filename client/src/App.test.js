import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayerCards  from './components/PlayerCards';
import { darkMode, setDarkMode} from './components/PlayerCards';

// import 'jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should have text Megan Rapinoe',  async ()=>{
  const {findByText} = await render(<PlayerCards />)
  findByText(/megan rapinoe/i)
})

it('renders player cards correctly', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerCards />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('basic math sanity check', () =>{
  expect(2).toBe(2);
})

test('basic math sanity check', () =>{
  expect(4).toBe(4);
})

test('dark mode class is applied when dark mode is enabled', async () =>{
  if(darkMode){
    const body = document.querySelector('body');
    expect(body.hasClass('dark-mode'));
  }
})
