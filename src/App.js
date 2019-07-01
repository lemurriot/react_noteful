import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import STORE from './dummy-store.js';
import NoteList from './NoteList'
import SelectedNote from './SelectedNote'
import Nav from './Nav'
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
    var stubNote = {id: "none", content: "some sample", name: "some name"}
    var currentNote = this.state.notes.find(note => note.id === noteId)
    return currentNote ? currentNote : stubNote
  }
  
  render(){
    const findNote = (notes=[], noteId) => notes.find(note => note.id === noteId)
    return (
      <>
        <header>
        <header>
            <Link to="/"><h1>Noteful</h1></Link>
        </header>
        </header>
        <section className="main-section">
          <Nav 
            notes={this.state.notes}
            folders={this.state.folders}
          />
          <Switch>
            <Route 
              exact 
              path="/" 
              render={() => (
                <NoteList 
                  notes={this.state.notes}
                />)}
            />
            <Route 
              path="/note/:id"
              render={routeProps => {
                return <SelectedNote 
                  {...routeProps}
                  notes={this.currentNote(routeProps.match.params.id)}
                />
              }}
            />
          </Switch>
        </section>
      </>
    );
  }
}

export default App;
