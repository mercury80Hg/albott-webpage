import React from "react"

const bodyText = "go one git"
function Contact() {
	return (
		<div className="contact" id="contact">
			<div className="banner-row">
				<div>
					<h1 className="myname-contact">allan E bott</h1>
					<div className="contact-method-row">
						<a href="https://www.linkedin.com/in/allan-bott/">
							<img
								className="linkedin-img"
								src="images/linkedin.png"
								alt="linked in logo"
							></img>
						</a>
						<a href="tel:+13476884186">
							<img className="mobile-img" src="images/call.png" alt=""></img>
						</a>
						<a href="mailto:[silver47ag@gmail.com]?subject=Email from allanbott.com, RE: &body=Your favorite color is: %0A%0AIf you could be an animal: %0A%0ASince you are human, what kind of robot would you like to be?: %0A%0A%0A">
							<img className="email-img" src="images/at-sign.png" alt=""></img>
						</a>
					</div>
				</div>

				<div className="logo-box">
					<img
						className="logo-contact"
						src="images/AEB-logo-final.png"
						alt="logo: green winged letter B in front of a pink and blue pyramid in front of a yellow circle"
					/>
				</div>

				<div className="why-list">
					<h3>
						Why <u>contact</u> me?
					</h3>
					<ul>
						<li>collaboration</li>
						<li>hire me</li>
						<li>take me out to lunch</li>
					</ul>
				</div>
			</div>
			<br />
			<br />
			<div>
				<hr size="5" />
				<br />
			</div>
		</div>
	)
}

export default Contact
