import React from "react"

/* Footer just has the copyright and credits, no sitemap.  I put it at the 
bottom of the Contacts component */

function Footer() {
	return (
		<footer className="footer-container">
			<div className="footer-row">
				<div className="footer-row-box">
					<h1 className="footer-title">photos</h1>
					<p>photography</p>
					<p>by</p>
					<p>allan bott</p>
					<p className="josh" >
						One photo by Josh Ter Louw
					</p>
				</div>
				<div className="footer-row-box">
					<h1 className="footer-title">web design</h1>
					<p>an original design</p>
					<p>by</p>
					<p>allan bott</p>
				</div>
				<div className="footer-row-box">
					<h1 className="footer-title">logo</h1>
					<p>original branding</p>
					<p>by</p>
					<p>allan bott</p>
				</div>
			</div>

			<div className="footer-resources-column-box">
				<h1 className="footer-title">resources</h1>
				<div>
					Icons made from
					<a href="https://www.flaticon.com/" title="Flaticon">
						{" "}
						www.flaticon.com
					</a>
				</div>
				<div>Additional Icons from Material Icons</div>
				<p className="copyright" >
					Copyright &copy; allanbott.com 2022
				</p>
			</div>
		</footer>
	)
}

export default Footer
