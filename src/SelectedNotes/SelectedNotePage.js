import React, { Component } from 'react'
import NotefulContext from '../NotefulContext'
import NavPartial from '../Nav/NavPartial'
import SelectedNote from './SelectedNote'
import { findCurrentNote, findCurrentFolder } from '../helperFunctions/helpers.js'
import PropTypes from 'prop-types'


export default class SelectedNotePage extends Component {
    static contextType = NotefulContext
    static defaultProps = {
        match: {
            params: {}
        }
    }
    render() {
        const { notes, folders, deleteNote } = this.context
        const { id: noteId } = this.props.match.params
        const note = findCurrentNote(notes, Number(noteId))
        const folder = findCurrentFolder(folders, Number(noteId), notes)
        return (
            <>
                <NavPartial 
                    folders={folder}
                    routerHistoryProps={this.props.history}
                />
                <SelectedNote 
                    notes={note}
                    deleteNote={deleteNote}
                    routeHistory={this.props.history}
                />
            </>
        )
    }
}

SelectedNotePage.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
}

