import React, { Component } from 'react'
import uuid from 'uuid'
import NotefulContext from './NotefulContext'

export default class AddFolder extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
    }
    static contextType = NotefulContext
    handleSubmit(e){
        e.preventDefault()
        const newFolder = {
            "id": uuid.v4(),
            "name": this.state.name
        }
        fetch('http://localhost:9090/folders', {
            method: 'POST',
            body: JSON.stringify(newFolder),
            headers: {
              'content-type': 'application/json' 
            }
          }).then(res => {
            if (!res.ok) throw new Error(res.status)
            return res.json()
          }).then(res => {
            this.context.addFolder(res)
          }).catch(error => {
              console.log(error)
          })

    }
    handleInputUpdate(e){
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <section className="add-folder-section">
                <form className="add-folder-form" onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="name">Folder Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={this.state.name}
                        onChange={e => this.handleInputUpdate(e)} required/>
                    <div className="form-button-group">
                        <button 
                            className="cancel-btn"
                            onClick={() => this.props.history.goBack()}
                        >
                            Cancel
                        </button>
                        <button className="submit-btn">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        )
    }
}
