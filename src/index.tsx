import React from 'react'
import ReactDOM from 'react-dom'
import AdminApp from './app/AdminApp'
import * as serviceWorker from './serviceWorker'
import { appManager } from './AppManager'
import CustomerApp from './app/CustomerApp'
import './index.css'

if (appManager.isAdmin) {
  ReactDOM.render(<AdminApp />, document.getElementById('root'))
} else {
  ReactDOM.render(<CustomerApp />, document.getElementById('root'))
}

if (appManager.isProd) {
  serviceWorker.register()
} else {
  serviceWorker.unregister()
}

;(window as any).appManager = appManager
