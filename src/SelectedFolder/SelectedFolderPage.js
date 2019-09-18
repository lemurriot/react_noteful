import React, { Component } from 'react'
import NotefulContext from '../NotefulContext'
import { findCurrentFolderSelection } from '../helperFunctions/helpers'
import NavFull from '../Nav/NavFull'
import NoteList from '../NoteList/NoteList'
import PropTypes from 'prop-types'


export default class SelectedFolderPage extends Component {
    static contextType = NotefulContext
    static defaultProps = {
        match: {
            params: {}
        }
    }
    render() {
        const { folders, notes, deleteNote } = this.context
        const { id: folderId } = this.props.match.params
        const selectedFolder = findCurrentFolderSelection(folders, notes, Number(folderId))
        console.log(selectedFolder)
        return (
            <>
                <NavFull 
                    folders={folders}
                    selectedFolder={selectedFolder.folder}
                />
                <NoteList 
                    notes={selectedFolder.notes}
                    deleteNote={deleteNote}
                />
            </>
        )
    }
}

SelectedFolderPage.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
}

