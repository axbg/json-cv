import React, { Component } from 'react'
import DetailList from '../DetailList/DetailList'
import './index.css'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.expanded,
            hovered: false
        };
    }

    componentDidMount() {
        const innerObject = Object.values(this.props.details)[0];
        if (typeof innerObject !== "object" || typeof innerObject[0] === "object") {
            this.setState({ expanded: true });
        }
    }

    escapeNumber(number) {
        return isNaN(number) ? "\"" + number + "\"" : number;
    }

    expand(value) {
        this.setState({expanded: value});
    }

    hoverBrackets(value) {
        this.setState({ hovered: value });
    }

    render() {
        if (this.state.expanded) {
            return (
                <div className="detail">
                    <div>
                        {
                            Object.keys(this.props.details).map((object, index) => {
                                if (Array.isArray(this.props.details[object])) {
                                    return <DetailList key={index} name={Object.keys(this.props.details)[index]}
                                        details={this.props.details[object]} last={(index === Object.keys(this.props.details).length - 1)} />
                                } else {
                                    let content = [];
                                    Object.keys(this.props.details[object]).forEach((property, index) => {
                                        content.push({ [property]: this.props.details[object][property] });
                                    });

                                    if (typeof (this.props.details[object]) !== "object") {
                                        return (
                                            <p key={index}>"{object}":{this.escapeNumber(this.props.details[object])}
                                                <span style={{ display: !this.props.last && (index !== Object.keys(this.props.details).length) ? 'inline' : 'none' }}>,</span>
                                            </p>
                                        );
                                    } else {
                                        let [g, d] = object.length ? ["\"", ":"] : ["", ""];
                                        return (
                                            <div key={index}>
                                                <p onClick={() => this.expand(false)}>
                                                    <span onMouseOver={() => this.hoverBrackets(true)} onMouseOut={() => this.hoverBrackets(false)}
                                                        className={this.state.hovered ? "hovered clickable" : "clickable"}>
                                                        {g}{object}{g}{d}{"{"}
                                                    </span>
                                                </p>
                                                {content.map((element, index) => {
                                                    return <Detail key={index} details={element} last={index === content.length - 1} />
                                                })}
                                                <p onClick={() => this.expand(false)}>
                                                    <span onMouseOver={() => this.hoverBrackets(true)} onMouseOut={() => this.hoverBrackets(false)}
                                                        className={this.state.hovered ? "hovered clickable" : "clickable"}>
                                                        {"}"}
                                                    </span>
                                                    {this.props.last ? "" : ","}
                                                </p>
                                            </div>
                                        );
                                    }
                                }
                            })
                        }
                    </div>
                </div>
            );
        } else {
            return (
                <div className="detail">
                    <p onClick={() => this.expand(true)}>
                        <span className="clickable" >
                            "{Object.keys(this.props.details)[0]}":{"{}"}{this.props.last ? "" : ","}
                        </span>
                    </p>
                </div>
            );
        }
    }
}

export default Detail;