import React, { Component } from 'react'

export default class FolderError extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error){
        return { hasError: true }
    }
    render() {
        if (this.state.hasError) return <div className="folder-error">Something went wrong, could not display folders</div>
        return this.props.children
    }
}
