import React, { Component } from 'react'
import './NoteApp.css'
import { IoAdd } from "react-icons/io5";
import { CiEraser } from "react-icons/ci";
import ColorBox from './ColorBox';
import Note from './Note';

export default class NoteApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
        colorBoxes : [
            {id : 1 , color : "#fff" , text : "#000"},
            {id : 2 , color : "#22177A" , text : "#fff"},
            {id : 3 , color : "#441752" , text : "#fff"},
            {id : 4 , color : "#CA7373" , text : "#fff"},
            {id : 5 , color : "#800000" , text : "#fff"},
            {id : 6 , color : "#1F4529" , text : "#fff"},
        ]
    }
  }  

  render() {
    return (
      <div className='NoteApp-wrapper'>
        <div className='NoteApp-input-wrapper'>
            <input type="text" placeholder='Your Note ...'/>
            <div className='NoteApp-icons-wrapper'>
                <IoAdd className='NoteApp-icons NoteApp-add-icon'/>
                <CiEraser className='NoteApp-icons NoteApp-eraser-icon'/>
            </div>
        </div>
        <div className='NoteApp-colorBox-wrapper'>
            {
                this.state.colorBoxes.map(colorBox => (
                    <ColorBox key={colorBox.id} {...colorBox}/>
                ))
            }
        </div>
        <div className='Notes-wrapper'>
            <Note />
        </div>
      </div>
    )
  }
}