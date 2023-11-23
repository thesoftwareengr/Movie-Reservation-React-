import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Homepage from './components/Homepage.jsx'
import {BrowserRouter, Router, Route} from React

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Homepage/>
  </React.StrictMode>,
)
