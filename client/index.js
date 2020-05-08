import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import Routes from './components/Routes'

// establishes socket connection
// import './socket'

ReactDOM.render(
  <Routes />
  ,
  document.getElementById('app')
)