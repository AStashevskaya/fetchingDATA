import './App.css';
import React,  { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchData} from './redux/actionData';
import App1 from './app1'

const  App = ()  => {


  return ( 
    <Provider store={store}>
       <div className="App">
    <App1 />
      </div>
    </Provider>
    
  );
}

export default App;
