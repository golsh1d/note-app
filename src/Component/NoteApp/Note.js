import './Note.css'
import React, { Component } from 'react'

export default class Note extends Component {
  removeItem(id) {
    this.props.onRemove(id)
  }  
  
  render() {
    let {id , title , bgColor , textColor} = this.props
    return (
      <div className='Note-wrapper' style={{backgroundColor : bgColor , color : textColor}}
      onClick={this.removeItem.bind(this , id)}>{title}</div>
    )
  }
}