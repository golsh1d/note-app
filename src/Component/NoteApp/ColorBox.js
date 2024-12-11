import './ColorBox.css'
import React, { Component } from 'react'

export default class ColorBox extends Component {
  render() {
    let {id , color} = this.props
    return (
      <div className='ColorBox-wrapper' style={{backgroundColor : color}}></div>
    )
  }
}