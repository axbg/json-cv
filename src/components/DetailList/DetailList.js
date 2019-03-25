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
                <div className="clickable">
                    <p onClick={() => this.expand(false)}>"{this.props.name}":[</p>
                    {this.props.details.map((detail, index) => {
                        if (Array.isArray(detail)) {
                            if (index !== this.props.details.length - 1) {
                                return <DetailList key={index} details={detail} />
                            } else {
                                return <DetailList key={index} details={detail} last />
                            }
                        } else {
                            console.log(this.props.details.length);
                            if (index !== this.props.details.length - 1) {
                                return <Detail key={index} details={{ "": detail }} />
                            } else {
                                return <Detail key={index} details={{ "": detail }} last />
                            }
                        }
                    })}
                    <p>]{this.props.last ? "" : ","}</p>
                </div>
            );
        } else {
            return (
                <div className="clickable">
                    <p onClick={() => this.expand(true)}>"{this.props.name}":[]{this.props.last ? "" : ","}</p>
                </div>
            );
        }
    }
}

export default DetailList;