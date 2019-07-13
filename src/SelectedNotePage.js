import React, { Component } from 'react'
import NotefulContext from './NotefulContext'
import NavPartial from './Nav/NavPartial'
import SelectedNote from './SelectedNote'
import { findCurrentNote, findCurrentFolder } from './helperFunctions/helpers.js'

export default class SelectedNotePage extends Component {
    static contextType = NotefulContext
    static defaultProps = {
        match: {
            params: {}
        }
    }
    render() {
        const { notes, folders } = this.context
        const { id: noteId } = this.props.match.params
        const note = findCurrentNote(notes, noteId)
        const folder = findCurrentFolder(folders, noteId, notes)
        return (
            <>
                <NavPartial 
                    folders={folder}
                    routerHistoryProps={this.props.history}
                />
                <SelectedNote 
                    notes={note}
                />
            </>
        )
    }
}

