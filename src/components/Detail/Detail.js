import React, { Component } from 'react'
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
        if (!this.props.isList) {
            return (
                <div>
                    <p className="detail">"{this.props.attribute}":{this.escapeNumber(this.props.value)}{!this.props.last ? "," : ""}</p>
                </div>
            );
        }
    }
}

export default Detail;