import { render } from 'react-dom'
import React, { Component } from 'react'
import ClientProvider from './provider/Client'
import '../sass/app.scss'
window.getInitialProps = (props, target) => {
  render(<ClientProvider {...props} />,  document.getElementById(target))
}
