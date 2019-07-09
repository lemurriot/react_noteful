import React, { Component } from 'react'
import NotefulContext from './NotefulContext'
import { findCurrentFolderSelection } from './helperFunctions/helpers'
import NavFull from './NavFull'
import NoteList from './NoteList'

export default class SelectedFolderPage extends Component {
    static contextType = NotefulContext
    static defaultProps = {
        match: {
            params: {}
        }
    }
    render() {
        const { folders = [{"id": "loading", "name": "loading"}], notes } = this.context
        console.log(folders)
        const { id: folderId } = this.props.match.params
        const selectedFolder = findCurrentFolderSelection(folders, notes, folderId)
        return (
            <>
                <NavFull 
                    folders={this.context}
                    selectedFolder={selectedFolder.folder}
                />
                <NoteList 
                    folders={this.context}
                    selectedFolder={selectedFolder.notes}
                />
            </>
        )
    }
}

