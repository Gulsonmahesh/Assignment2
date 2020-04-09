import React, { Component, Fragment } from 'react'
import './App.css';
import Allproduct from './productClass/allproduct';
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <Allproduct />
        </div>
      </Fragment>
    )
  }
}
