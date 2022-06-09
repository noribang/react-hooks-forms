import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'
import ParentComponent from "./components/ParentComponent";

// ReactDOM.render(
//   <Form />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <ParentComponent />,
  document.getElementById('root')
);