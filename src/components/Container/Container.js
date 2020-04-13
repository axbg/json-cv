import React, { Component } from 'react'
import Detail from '../Detail/Detail'
import { cvInfo } from './Constants';
import './index.css'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: cvInfo
        }
    }

    render() {
        return (
            <div className="container">
                <div className="cv-container">
                    <p className="left-margined">{"{"}</p>
                    <Detail details={this.state.details} expanded last />
                    <p className="left-margined">{"}"}</p>
                </div>
            </div>
        );
    }
}

export default Container;