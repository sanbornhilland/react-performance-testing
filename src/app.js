import React from 'react'
import ReactDOM from 'react-dom'
import Container from './container'
import Perf from 'react-addons-perf'

window.Perf = Perf

export default function init() {
  console.debug('Initializing app...')

  ReactDOM.render(<Container></Container>, document.querySelector('#app'))
}
