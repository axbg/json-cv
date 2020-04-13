import React, { Component } from 'react';
import "./index.css"

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <h1 className="strip-attributes center">@axbg</h1>
                <hr/>
            </div>
        );
    }
}

export default Header;