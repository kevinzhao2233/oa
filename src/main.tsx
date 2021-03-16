import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import App from './App';

import './styles/reset.css';
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
