import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <header>
                <ul id="headerButtons">
                    <li className="navButton">
                        <Link to="" className="btn btn-sm btn-success">Home</Link>
                    </li>
                    <li className="navButton">
                        <Link to="/about" className="btn btn-sm btn-success">About</Link>
                    </li>
                </ul>
            </header>
        )
    }
}

export default NavBar;