import React, { Component } from 'react'
import Detail from '../Detail/Detail'
import './index.css'

class DetailList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.expanded,
            hovered: false
        }
    }

    expand(value) {
        this.setState({ expanded: value });
    }

    hoverBrackets(value) {
        this.setState({ hovered: value });
    }

    render() {
        if (this.state.expanded) {
            return (
                <div>
                    <p onClick={() => this.expand(false)}>
                        <span onMouseOver={() => this.hoverBrackets(true)} onMouseOut={() => this.hoverBrackets(false)}
                            className={this.state.hovered ? "hovered clickable" : "clickable"}>
                            "{this.props.name}":{"["}
                        </span>
                    </p>
                    {this.props.details.map((detail, index) => {
                        if (Array.isArray(detail)) {
                            return <DetailList key={index} details={detail} last={index === this.props.details.length - 1} />
                        } else {
                            return <Detail key={index} details={{ '': detail }} expanded last={index === this.props.details.length - 1} />
                        }
                    })}
                    <p>
                        <span onMouseOver={() => this.hoverBrackets(true)} onMouseOut={() => this.hoverBrackets(false)}
                            className={this.state.hovered ? "hovered clickable" : "clickable"}>
                            {"]"}
                        </span>
                        {this.props.last ? "" : ","}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <p onClick={() => this.expand(true)}>
                        <span className="clickable" >
                            "{this.props.name}":[]{this.props.last ? "" : ","}
                        </span>
                    </p>
                </div>
            );
        }
    }
}

export default DetailList;