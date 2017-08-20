import './bootstrap'
import { render } from 'react-dom'
import React, { Component } from 'react'
import ClientProvider from './provider/Client'

export const App =  (props) => {
  render(<ClientProvider {...props} />,  document.getElementById('app'))
}
