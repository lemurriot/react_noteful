import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import STORE from './dummy-store.js';
import NoteList from './NoteList'
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
  render(){
    return (
      <>
        <Nav 
          notes={this.state.notes}
          folders={this.state.folders}
        />
        <Switch>
          <Route 
            exact 
            path="/" 
            render={() => (<NoteList notes={this.state.notes}/>)}
          />
          <Route />
          <Route />
        </Switch>
      </>
    );
  }
}

export default App;
