import React, { Component } from 'react'
import NotefulContext from './NotefulContext'

export default class AddNote extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            content: ''
        }
    }
    handleSubmit(e){
        e.preventDefault()
        console.log('submitted')
    }
    handleTitleInputChange(e){
        this.setState({
            title: e.target.value
        })
    }
    handleContentInputChange(e){
        this.setState({
            content: e.target.value
        })
    }
    static contextType = NotefulContext
    render() {
        const folderOptions = this.context.folders.map(folder => <option key={folder.id} value={folder.id} id={folder.id}>{folder.name}</option>)
        return (
            <section>
                <form 
                    className="add-note-form" 
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <label htmlFor="folder">
                        Select a folder
                    </label>
                    <select name="folder" id="folder">
                        {folderOptions}
                    </select>
                    <label htmlFor="title">
                        Title
                    </label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title"
                        value={this.state.title}
                        onChange={e => this.handleTitleInputChange(e)}
                    />
                    <label htmlFor="content">
                        Content
                    </label>
                    <textarea 
                        type="text" 
                        id="content" 
                        name="content"
                        value={this.state.content}
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
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        )
    }
}
