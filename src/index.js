import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import NewsDetail from './News/NewsDetail';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/:url" component={NewsDetail}/>
    </Switch>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
