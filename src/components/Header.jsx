import React from "react"
import { Link } from "react-router-dom"



function Header() {
	return (
		<header id="header">
			<div className="hyperlinks-box">
				<Link className="hyperlinks" to="/about">
					about
				</Link>
				<Link className="hyperlinks contacts" to="/contact">
					contact
				</Link>
				<Link className="hyperlinks contacts" to="/projects_blank">
					projects
				</Link>
			</div>
			<h1 className="myname"><Link to="/adventure">a</Link>llan <Link className="e" to="/excitement">E</Link>  <Link to="/beauty">b</Link>ot<Link to="/travel">t</Link></h1>
			{/* ///Floating Home Button//// */}
			{/* <Link to="/" class="material-icons floating-btn">
				<span class="material-icons-round floating-btn-icon">home</span>
			</Link> */}
		</header>
	)
}

export default Header
