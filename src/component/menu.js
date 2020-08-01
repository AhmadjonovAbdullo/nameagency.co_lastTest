import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="menu">
                <button className="close_btn">
                    <FaTimes />
                </button>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About us</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </div>
        )
    }
}