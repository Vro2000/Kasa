//src/components/Header/Header.jsx
import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.scss"

const Header = () => {
	return (
		<header>
			<div className="logo">
				<img src="/images/logo-orange.png" alt="Logo" />
			</div>
			<nav>
				<ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}> Accueil </NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}> À propos </NavLink></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
