import React, { Component } from 'react'
import './index.css'
import Detail from '../Detail/Detail'

class DetailList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.expanded
        }
    }

    expand(value) {
        this.setState({
            expanded: value
        })
    }

    render() {
        if (this.state.expanded) {
            return (
                <div>
                    write logic to render details or other lists
                </div>
            );
        } else {
            return (
                <div>
                    <p onClick={() => this.expand(true)}>"{this.props.name}":+</p>
                </div>
            );
        }
    }
}

export default DetailList;