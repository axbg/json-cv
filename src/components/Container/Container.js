import React, { Component } from 'react'
import './index.css'
import Detail from '../Detail/Detail'
import './Constants'
import { cvInfo } from './Constants';

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
                    <Detail details={this.state.details}/>
                    <p className="left-margined">{"}"}</p>
                </div>
            </div>
        );
    }
}

export default Container;