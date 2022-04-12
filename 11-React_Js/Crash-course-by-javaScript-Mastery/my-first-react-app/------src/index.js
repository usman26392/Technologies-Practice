import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* below is a caller of parent / root component . */}
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
