import React, { Component } from 'react'
import NotefulContext from '../NotefulContext'
import ValidationError from '../Validation/ValidationError'
import PropTypes from 'prop-types'
import './AddNote.css'

export default class AddNote extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: {
                value: '',
                touched: false
            },
            content: {
                value: '',
                touched: false
            },
            selectedFolder: 1
        }
    }

    static contextType = NotefulContext
    handleSubmit(e){
        e.preventDefault()
        const newNote = {
            note_title: this.state.title.value,
            folder_id: this.state.selectedFolder,
            content: this.state.content.value
        }
        fetch('https://aqueous-wave-36481.herokuapp.com/api/note', {
            method: 'POST',
            body: JSON.stringify(newNote),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            if (!res.ok) throw new Error(res.status)
            return res.json()
        }).then(res => {
            this.context.addNote(res)
            this.props.history.push('/')
        }).catch(error => {
            console.log(error)
        })
    }
    handleTitleInputChange(e){
        this.setState({
            title: {
                value: e.target.value,
                touched: true
            }
        })
    }
    handleContentInputChange(e){
        this.setState({
            content: {
                value: e.target.value,
                touched: true
            }
        })
    }
    handleSelectFolder(e){
        this.setState({
            selectedFolder: e.target.value
        })
    }
    validateTitle(){
        if (this.state.title.value.trim().length === 0) return 'Title is required'
    }
    render() {
        const folderOptions = this.context.folders.map(folder => <option key={folder.id} value={folder.id} id={folder.id}>{folder.folder_title}</option>)
        return (
            <section className="add-note-section">
                <form 
                    className="add-note-form" 
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <label htmlFor="folder">
                        Select a folder
                    </label>
                    <select name="folder" id="folder" onChange={e => this.handleSelectFolder(e)}>
                        {folderOptions}
                    </select>
                    <label htmlFor="title">
                        Title (required)
                    </label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title"
                        value={this.state.title.value}
                        aria-label="note title"
                        aria-required="true"
                        aria-describedby="titleError"
                        required
                        onChange={e => this.handleTitleInputChange(e)}
                    />
                    {this.state.title.touched && (<ValidationError message={ this.validateTitle()} validationId={"titleError"}/>)}
                    <label htmlFor="content">
                        Content
                    </label>
                    <textarea 
                        type="text" 
                        id="content" 
                        name="content"
                        aria-label="note content"
                        aria-required="false"
                        value={this.state.content.value}
                        onChange={e => this.handleContentInputChange(e)}
                    />
                    <div className="form-button-group">
                        <button 
                            className="cancel-btn"
                            onClick={() => this.props.history.goBack()}
                        >
                            Cancel
                        </button>
                        <button 
                            className="submit-btn" 
                            type="submit"
                            disabled={this.validateTitle()}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        )
    }
}

AddNote.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
}
