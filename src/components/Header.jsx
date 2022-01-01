import React from "react"

function Header() {
	return (
		<header id="header">
			<div className="hyperlinks-box">
				<a className="hyperlinks" href="#about">
					about
				</a>
				<a className="hyperlinks contacts" href="#contact">
					contact
				</a>
				<a
					className="hyperlinks"
					href="https://mercury80hg.github.io/NYT-Best-Sellers-List/"
					target="_blank" 
					//prevent tabnabbing
					rel="noopener noreferrer"
				>
					projects
				</a>
			</div>
			<h1 className="myname"><a href="#adventure">a</a>llan <a className="e" href="#excitement">E</a>  <a href="#beauty">b</a>ot<a href="#travel">t</a></h1>
			<a href="#header" class="material-icons floating-btn">
				<span class="material-icons-round floating-btn-icon">home</span>
			</a>
		</header>
	)
}

export default Header
