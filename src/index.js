import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import { BrowserRouter } from 'react-router-dom';
/*
  Bootstrap + font-awesome Configuration
*/
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.css'

import { UserContext1Provider } from './July8/Usecontext1';
import { Usercontext2Provider } from './July8/Usecontext2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Usercontext2Provider>
  <UserContext1Provider>
    <React.StrictMode>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </React.StrictMode>
    </UserContext1Provider>
    </Usercontext2Provider>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
