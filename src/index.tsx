import React from 'react'

import ReactDOM from 'react-dom'
import './index.css'
import { HashRouter } from 'react-router-dom'

import { App } from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
)

reportWebVitals()
