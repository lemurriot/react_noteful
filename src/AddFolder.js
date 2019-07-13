import React, { Component } from 'react'
import uuid from 'uuid'

export default class AddFolder extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
    }
    handleSubmit(e){
        e.preventDefault()
        const newFolder = {
            "id": uuid.v4(),
            "name": this.state.name
        }
        console.log(newFolder)

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
