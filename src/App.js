import './App.css';
import React, { Component } from 'react'
import Header from './Component/Header/Header';
import NoteApp from './Component/NoteApp/NoteApp';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NoteApp />
      </div>
    )
  }
}