import React from "react"

function Header() {
	return (
		<header id="header">
			<div className="hyperlinks-box">
				<a className="hyperlinks" href="#about-text">
					About
				</a>
				<a className="hyperlinks contacts" href="#contact">
					Contact
				</a>
				<a
					className="hyperlinks"
					href="https://mercury80hg.github.io/NYT-Best-Sellers-List/"
				>
					Projects
				</a>
			</div>
			<h1 className="myname">allan E bott</h1>
			<a href="#header" className="material-icons floating-btn">
					<span className="material-icons-round floating-btn-icon">home</span>
			</a>
		</header>
	)
}

export default Header
