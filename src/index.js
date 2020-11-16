import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter ,Switch,Route} from 'react-router-dom'
import Accountpage from './components/Select_account_page/Accountpage';
import  {Provider} from 'react-redux'
import reducer from './Redux/Reducers/All_Reducer'
import { createStore } from 'redux';
import App from './App'
import Homepage from './components/Homepage/Homepage';


const store = createStore(reducer)


ReactDOM.render(
  <>
  <Provider store={store}>
  <BrowserRouter> 
      
       <App/>
   {/* <Homepage/> */}
    </BrowserRouter>
    </Provider>
  </>,
  document.getElementById('root')
);


