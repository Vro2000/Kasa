//src/components/Header/Header.jsx
import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.scss"

const Header = () => {
	return (
		<header>
			<div className="logo">
			<NavLink to="/"><img src={process.env.PUBLIC_URL + '/images/logo-orange.png'} alt="Logo" /></NavLink>
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
