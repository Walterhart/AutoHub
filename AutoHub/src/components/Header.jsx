import React from "react"
import { Link } from "react-router-dom"
export default function Header() {
    return (
        <header>
            <Link className="site-logo" to="/">AutoHub</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/cars">Cars</Link>
            </nav>
        </header>
    )
}