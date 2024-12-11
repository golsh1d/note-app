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
            {id : 1 , color : "#D8DBBD" , text : "#757575"},
            {id : 2 , color : "#22177A" , text : "#fff"},
            {id : 3 , color : "#441752" , text : "#fff"},
            {id : 4 , color : "#CA7373" , text : "#fff"},
            {id : 5 , color : "#800000" , text : "#fff"},
            {id : 6 , color : "#1F4529" , text : "#fff"},
        ] ,
        noteInput : '' ,
        inputBgColor : '#D8DBBD' , 
        inputTextColor : '#757575' , 
        notes : [] ,
    }

    this.changeInputHandler = this.changeInputHandler.bind(this)
    this.addNote = this.addNote.bind(this)
    this.keyDownInputHandler = this.keyDownInputHandler.bind(this)
    this.clearInput = this.clearInput.bind(this)
    this.inputBgColorHandler = this.inputBgColorHandler.bind(this)
    this.noteRemoveHandler = this.noteRemoveHandler.bind(this)
  }  

  changeInputHandler(event) {
    this.setState({
        noteInput : event.target.value
    })
  }

  addNote() {
    if(this.state.noteInput) {
        let newNote = {
            id : this.state.notes.length + 1 , 
            title : this.state.noteInput , 
            bgColor : this.state.inputBgColor ,
            textColor : this.state.inputTextColor ,
        }

        this.setState(prevState => {
            return {notes : [...prevState.notes ,newNote]}
        })

        this.setState({
            noteInput : '' ,
            inputBgColor : '#D8DBBD' , 
            inputTextColor : '#757575' , 
        })
    }
  }

  keyDownInputHandler(event) {
    if (event.key === 'Enter') {
        this.addNote()
    }
  }

  clearInput() {
    this.setState({
        noteInput : ''
    })
  }

  inputBgColorHandler(inputBgColor , inputTextColor) {
    this.setState({
        inputBgColor : inputBgColor ,
        inputTextColor : inputTextColor ,      
    })
  }

  noteRemoveHandler(noteId) {
    let newNotesArray = this.state.notes.filter(note => {
        return note.id !== noteId
    })

    this.setState({
        notes : newNotesArray
    })
  }

  render() {
    return (
      <div className='NoteApp-wrapper'>
        <div className='NoteApp-input-wrapper'>
            <input type="text" placeholder='Your Note ...' style={ { backgroundColor : this.state.inputBgColor , color : this.state.inputTextColor } } value={this.state.noteInput} onChange={(event) => this.changeInputHandler(event)}
            onKeyDown={(event) => this.keyDownInputHandler(event)}/>
            <div className='NoteApp-icons-wrapper'>
                <IoAdd className='NoteApp-icons NoteApp-add-icon' onClick={this.addNote}/>
                <CiEraser className='NoteApp-icons NoteApp-eraser-icon' onClick={this.clearInput}/>
            </div>
        </div>
        <div className='NoteApp-colorBox-wrapper'>
            {
                this.state.colorBoxes.map(colorBox => (
                    <ColorBox key={colorBox.id} {...colorBox} onColor={this.inputBgColorHandler}/>
                ))
            }
        </div>
        <div className='Notes-wrapper'>
            {
                this.state.notes.map(note => (
                    <Note key={note.id} {...note} onRemove={this.noteRemoveHandler}/>
                ))
            }
        </div>
      </div>
    )
  }
}