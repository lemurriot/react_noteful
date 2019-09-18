import React, { Component } from 'react'
import NotefulContext from '../NotefulContext'
import ValidationError from '../Validation/ValidationError'
import PropTypes from 'prop-types'


export default class AddFolder extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: {
                value: '',
                touched: false
            },
        }
    }
    static contextType = NotefulContext
    handleSubmit(e){
        e.preventDefault()
        const newFolder = {
            "folder_title": this.state.name.value
        }
        // to break the code for testing error boundaries, comment out previous newFolder and uncomment following newFolder
        // const newFolder = [1,2,3]
        fetch('https://aqueous-wave-36481.herokuapp.com/api/folder', {
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
            this.setState({
                name: {
                    value: '',
                    touched: false
                }
            })
            this.props.history.push('/')
          }).catch(error => {
              console.log(error)
          })

    }
    handleInputUpdate(e){
        this.setState({
            name: {
                value: e.target.value,
                touched: true
            }
        })
    }
    validateFolderName(){
        const name = this.state.name.value.trim()
        if (name.length === 0) return 'Name is required'
        else if (this.context.folders.find(folder => folder.name === name)) return 'Name must be unique'
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
                        aria-label="folder name"
                        // aria-describedby="folderError"
                        aria-required="true"
                        value={this.state.name.value}
                        onChange={e => this.handleInputUpdate(e)} required
                    />
                    {this.state.name.touched && (<ValidationError message={this.validateFolderName()} validationId={"folderError"}/>)}
                    <div className="form-button-group">
                        <button 
                            className="cancel-btn"
                            onClick={() => this.props.history.goBack()}
                        >
                            Cancel
                        </button>
                        <button 
                            className="submit-btn"
                            disabled={this.validateFolderName()}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        )
    }
}

AddFolder.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
}