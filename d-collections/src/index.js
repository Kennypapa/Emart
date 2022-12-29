import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './views/Home';
import Products from './views/Products';
import Product from './views/Product';
import About from './views/About'; 
import Cart from './views/Cart';
import Contact from './views/Contact'; 
import reportWebVitals from './reportWebVitals';
import store from './store/index';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
      
          <Route path='' element={<App/>}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/products/:id' element={<Product/>}></Route>
            <Route path='/about-us' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Route>
        
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
