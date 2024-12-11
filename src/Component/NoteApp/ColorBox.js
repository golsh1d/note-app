import './ColorBox.css'
import React, { Component } from 'react'

export default class ColorBox extends Component {
  changColor(color , text) {
    this.props.onColor(color , text)
  }  
  
  render() {
    let {id , color , text} = this.props
    return (
      <div className='ColorBox-wrapper' style={{backgroundColor : color}} onClick={this.changColor.bind(this , color , text)}></div>
    )
  }
}