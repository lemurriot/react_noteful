import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import NotefulContext from './NotefulContext'
import Main from './Main'
import './App.css';
import SelectedNotePage from './SelectedNotePage'
import SelectedFolderPage from './SelectedFolderPage'
import AddNote from './AddNote'
import AddFolder from './AddFolder'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [],
      folders: [],
      error: null
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
      }).catch(error => {
        console.log(error)
        this.setState({
          error
        })
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
      }).catch(error => {
        console.log(error)
        this.setState({
          error
        })
      })
  }

  deleteNote = (noteId) => {

    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    }).then(res => {
      if (!res.ok){
        throw new Error(res.status)
      }
      return res.json()
    }).then(res => {
      const newNoteSet = this.state.notes.filter(note => note.id !== noteId)
      console.log(newNoteSet)
      this.setState({
        notes: newNoteSet
      })
    }).catch(error => {
      console.log(error)
      this.setState({
        error
      })
    })
  }
  addFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder]
    })
  }
  
  render(){
    const contextVal = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder
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
            <Route 
              path="/add-note"
              component={AddNote}
            />
            <Route 
              path="/add-folder"
              component={AddFolder}
            />
          </Switch>
        </section>
      </NotefulContext.Provider>
    );
  }
}

export default App;
