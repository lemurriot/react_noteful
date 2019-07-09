import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import NotefulContext from './NotefulContext'
import Main from './Main'
// import STORE from './dummy-store.js';
import NoteList from './NoteList'
import SelectedNote from './SelectedNote'
import NavPartial from './NavPartial'
import NavFull from './NavFull'
import './App.css';
import SelectedNotePage from './SelectedNotePage'
import SelectedFolderPage from './SelectedFolderPage'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [],
      folders: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:9090/notes')
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      }).then(res => {
        this.setState({
          notes: res
        })
      }).catch(err => {
        console.log(err)
      })
    fetch('http://localhost:9090/folders')
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      }).then(res => {
        this.setState({
          folders: res
        })
      }).catch(err => {
        console.log(err)
      })
  }

  currentNote(noteId) {
    const currentNote = this.state.notes.find(note => note.id === noteId)
    return currentNote ? currentNote : {}
  }
  currentFolder(noteId){
    const stubFolder = {id: "none", name: "none"}
    const getNote = this.currentNote(noteId)
    const currentFolderId = getNote.folderId
    const currentFolder = this.state.folders.find(folder => folder.id === currentFolderId)
    return currentFolder ? [currentFolder] : [stubFolder]
  }
  currentFolderSelection(folderId){
    const currentFolder = this.state.folders.find(folder => folder.id === folderId)
    const currentNotes = this.state.notes.filter(note => note.folderId === currentFolder.id)
    return {
      folder: currentFolder ? currentFolder : {},
      notes: currentNotes ? currentNotes : {}
    }
  }
  
  render(){
    const contextVal = {
      notes: this.state.notes,
      folders: this.state.folders
    }
    return (
      <NotefulContext.Provider value={contextVal}>
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
              component={Main}
            />
            <Route 
              path="/note/:id"
              component={SelectedNotePage}
            />
            <Route 
              path="/folder/:id"
              component={SelectedFolderPage}
            />
          </Switch>
        </section>
      </NotefulContext.Provider>
    );
  }
}

export default App;
