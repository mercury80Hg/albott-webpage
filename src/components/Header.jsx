import React from "react"
import { Link } from "react-router-dom"

/* This is the simple top navbar that is located at the top of the Splash page 
only */

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
				<Link className="hyperlinks contacts" to="/projects">
					projects
				</Link>
			</div>
			<h1 className="myname">
				<Link to="/adventure">a</Link>llan{" "}
				<Link className="e" to="/excitement">
					E
				</Link>{" "}
				<Link to="/beauty">b</Link>ot<Link to="/travel">t</Link>
			</h1>
			{/* ///Floating Home Button//// 
			 I kept this code in case I wanted to switch to single page vertical 
			 scroller for mobile.  Currently it does still work actively on the 
			 Contacts component/page, but since there is no scrolling that is not 
			 noticeable. Once the site is completely finished may consider removing this.*/}

			{/* <Link to="/" class="material-icons floating-btn">
				<span class="material-icons-round floating-btn-icon">home</span>
			</Link> */}
		</header>
	)
}

export default Header
