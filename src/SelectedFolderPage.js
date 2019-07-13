import React, { Component } from 'react'
import NotefulContext from './NotefulContext'
import { findCurrentFolderSelection } from './helperFunctions/helpers'
import NavFull from './Nav/NavFull'
import NoteList from './NoteList'

export default class SelectedFolderPage extends Component {
    static contextType = NotefulContext
    static defaultProps = {
        match: {
            params: {}
        }
    }
    render() {
        const { folders, notes } = this.context
        console.log(folders)
        const { id: folderId } = this.props.match.params
        const selectedFolder = findCurrentFolderSelection(folders, notes, folderId)
        return (
            <>
                <NavFull 
                    folders={folders}
                    selectedFolder={selectedFolder.folder}
                />
                <NoteList 
                    folders={folders}
                    notes={selectedFolder.notes}
                />
            </>
        )
    }
}

