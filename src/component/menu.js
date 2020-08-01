import React from 'react';
import { Link } from 'react-router-dom';
import "../style/style.css";

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu fade-in">
                <ul>
                    <li>
                        <Link to="/" className="Link text-decoration-none text-light">Work.</Link>
                    </li>
                    <li>
                        <Link to="/about" className="Link text-decoration-none text-light">About.</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="Link text-decoration-none text-light">Philosophy.</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="Link text-decoration-none text-light">Contact.</Link>
                    </li>
                </ul>
            </div>
        )
    }
}