import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';
import './index.css';

const items = [{
    title: 'Section 1',
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

}, {
    title: 'Section 2',
    body: "Foo bar"

}, {
    title: 'Section 3',
    body: "Baz"

}];

ReactDOM.render(
  <Accordion items={items} />,
  document.getElementById('root')
);
