// react
import 'babel-polyfill'
import React from 'react'
import ReactDOM from "react-dom"

// page
import NavPage from './js/components/NavPage'    // 1. nav page

import LoginPage from './js/containers/Login'           // 1.1 index page
import Test01Page from './js/containers/Test01'         // 1.2 Test01 page
import Test02Page from './js/containers/Test02'         // 1.3 Test02 page
import Test03Page from './js/containers/Test03'         // 1.4 Test03 page
import Test04Page from './js/containers/Test04'         // 1.5 Test04 page


// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'

// reducers
import allReducers from './js/reducers'

// router
import { Router, Route, hashHistory, IndexRoute, } from 'react-router'

// store create
const logger = createLogger()
const store = createStore(
  allReducers,
  window.devToolsExtension ? window.devToolsExtension() : undefined,
  applyMiddleware(thunk, promise, logger),
)

/**************************************** entry-point ****************************************/
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={NavPage}>
        <IndexRoute component={LoginPage} />
        <Route path="test_01" component={Test01Page} />
        <Route path="test_02" component={Test02Page} />
        <Route path="test_03" component={Test03Page} />
        <Route path="test_04" component={Test04Page} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
