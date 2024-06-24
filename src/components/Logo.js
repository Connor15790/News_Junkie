import React, { Component } from 'react'
import logo from './logo.png'

export class Logo extends Component {
  render() {
    return (
      <div className='text-center' style={{marginTop: "50px"}}>
        <img src={logo} alt="logo" style={{width: 1200, height: 180}}/>
      </div>
    )
  }
}

export default Logo
