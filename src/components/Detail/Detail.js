import React, { Component } from 'react'
import DetailList from '../DetailList/DetailList'
import './index.css'

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comma: ""
        }
    }

    escapeNumber(number) {
        if (isNaN(number)) {
            return "\"" + number + "\"";
        } else {
            return number;
        }
    }

    render() {
        return (
            <div className="detail">
                <div>
                    {
                        Object.keys(this.props.details).map((object, index) => {
                            if (Array.isArray(this.props.details[object])) {
                                if (index !== Object.keys(this.props.details).length - 1) {
                                    return <DetailList key={index} name={Object.keys(this.props.details)[index]}
                                        details={this.props.details[object]} />
                                } else {
                                    return <DetailList key={index} name={Object.keys(this.props.details)[index]}
                                        details={this.props.details[object]} last />
                                }
                            } else {
                                let content = [];
                                Object.keys(this.props.details[object]).forEach((property, index) => {
                                    content.push({ [property]: this.props.details[object][property] });
                                })

                                if (typeof (this.props.details[object]) !== "object") {
                                    if (!this.props.last && (index !== Object.keys(this.props.details).length)) {
                                        return <p key={index}>"{object}":{this.escapeNumber(this.props.details[object])},</p>
                                    } else {
                                        return <p key={index}>"{object}":{this.escapeNumber(this.props.details[object])}</p>
                                    }
                                } else {
                                    let g = object.length ? "\"" : "";
                                    let d = object.length ? ":" : "";
                                    return <div key={index}>
                                        <p>{g}{object}{g}{d}{"{"}</p>
                                        {content.map((element, index) => {
                                            if (index !== content.length - 1) {
                                                return <Detail key={index} details={element} />
                                            } else {
                                                return <Detail key={index} details={element} last />
                                            }
                                        })}
                                        <p>{"}"}{this.props.last ? "" : ","}</p>
                                    </div>
                                }
                            }
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Detail;