import React, { Component } from 'react'
import './index.css'
import DetailList from '../DetailList/DetailList'
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
                    <DetailList details={this.state.details} isRoot={true} />
                    <p className="left-margined">{"}"}</p>
                </div>
            </div>
        );
    }
}

export default Container;