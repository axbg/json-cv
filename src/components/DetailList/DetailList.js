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
        if (this.props.isRoot) {
            return (
                <div className="list-container">
                    {Object.entries(this.props.details).map(([key, element]) => {
                        if (element.isList) {
                            return <DetailList key={key} attribute={element.attribute} details={element.children}
                                expanded={false} last={element.last} />
                        } return <Detail key={key} attribute={element.attribute} value={element.value} last={element.last} />
                    })}
                </div>
            );
        } else {
            if (this.state.expanded) {
                return (
                    <div className="margined list-container">
                        <div>
                            <p className="clickable" onClick={() => this.expand(false)}>"{this.props.attribute}":[{"{"}</p>
                        </div>
                        {Object.entries(this.props.details).map(([key, element]) => {
                            if (element.isList) {
                                return (
                                    <div>
                                        <DetailList key={key} attribute={element.attribute} details={element.children}
                                            expanded={false} last={element.last} />
                                    </div>
                                );
                            } return <Detail key={key} attribute={element.attribute} value={element.value} last={element.last} />
                        })}
                        <div>
                            <p className="clickable" onClick={() => this.expand(false)}>{"}"}]{!this.props.last ? "," : ""}</p>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="margined list-container">
                        <p className="clickable" onClick={() => this.expand(true)}>
                            "{this.props.attribute}":[] {!this.props.last ? "," : ""}
                        </p>
                    </div>
                );
            }
        }
    }
}

export default DetailList;