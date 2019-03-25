import React, { Component } from 'react'
import DetailList from '../DetailList/DetailList'
import './index.css'

class Detail extends Component {

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
                                return <DetailList key={index} name={Object.keys(this.props.details)[0]} details={this.props.details[object]}/>
                            } else {

                                let content = [];
                                Object.keys(this.props.details[object]).forEach((property, index) => {
                                    content.push({ [property]: this.props.details[object][property] });
                                })

                                if (typeof (this.props.details[object]) !== "object") {
                                    return <p key={index}>"{object}":{this.escapeNumber(this.props.details[object])},</p>
                                } else {
                                    return <div key={index}>
                                        <p>"{object}":{"{"}</p>
                                        {content.map((element, index) => {
                                            return <Detail key={index} details={element} />
                                        })}
                                        <p>{"},"}</p>
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