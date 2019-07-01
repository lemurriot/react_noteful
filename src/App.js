import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import STORE from './dummy-store.js';
import NoteList from './NoteList'
import SelectedNote from './SelectedNote'
import NavPartial from './NavPartial'
import NavFull from './NavFull'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [],
      folders: []
    }
  }
  componentDidMount(){
    this.setState(STORE)
  }

  currentNote(noteId) {
    const stubNote = {id: "none", content: "none", name: "none", folderId: "none"}
    const currentNote = this.state.notes.find(note => note.id === noteId)
    return currentNote ? currentNote : stubNote
  }
  currentFolder(noteId){
    const stubFolder = {id: "none", name: "none"}
    const getNote = this.currentNote(noteId)
    const currentFolderId = getNote.folderId
    const currentFolder = this.state.folders.find(folder => folder.id === currentFolderId)
    return currentFolder ? [currentFolder] : [stubFolder]
  }
  currentFolderSelection(folderId){
    const stubFolder = {id: "none", name: "none"}
    const stubNote = {id: "none", content: "none", name: "none", folderId: "none", modified: "2019-01-03T00:00:00.000Z"}
    const currentFolder = this.state.folders.find(folder => folder.id === folderId)
    const currentNotes = this.state.notes.filter(note => note.folderId === currentFolder.id)
    console.log(currentNotes)
    return {
      folder: currentFolder ? currentFolder : stubFolder,
      notes: currentNotes ? currentNotes : stubNote
    }
  }
  
  render(){
    return (
      <>
        <header>
        <header>
            <Link to="/"><h1>Noteful</h1></Link>
        </header>
        </header>
        <section className="main-section">
          <Switch>
            <Route 
              exact 
              path="/" 
              render={() => (
                <>
                <NavFull 
                  folders={this.state.folders}
                />
                <NoteList 
                  notes={this.state.notes}
                /></>)}
            />
            <Route 
              path="/note/:id"
              render={routeProps => {
                return (
                  <>
                  <NavPartial 
                    {...routeProps}
                    folders={this.currentFolder(routeProps.match.params.id)}
                  />
                  <SelectedNote 
                    {...routeProps}
                    notes={this.currentNote(routeProps.match.params.id)}
                  /></>)
              }}
            />
            <Route 
              path="/folder/:id"
              render={routeProps => {
                return (
                  <>
                  <NavFull 
                    {...routeProps}
                    folders={this.state.folders}
                    selectedFolder={this.currentFolderSelection(routeProps.match.params.id).folder}
                  />
                  <NoteList
                    {...routeProps}
                    notes={this.currentFolderSelection(routeProps.match.params.id).notes}
                  /></>)
              }}
            />
          </Switch>
        </section>
      </>
    );
  }
}

export default App;
