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
				<hr size="5" noshade />
				<h3 className="or">Or Contact Me Here</h3>
				<form
					className="contact-form"
					action="mailto:silver47ag@gmail.com"
					method="post"
					enctype="text/plain"
                    target="_blank"
				>
					<div className="name-email">
						<label className="name-email-label" for="">
							Your Name:{" "}
						</label>
						<input className="name-email-input" type="text" name="yourName" />
						<label className="name-email-label" for="">
							Your Email:{" "}
						</label>
						<input className="name-email-input" type="email" name="yourEmail" />
					</div>

					<br />
					<label className="pray-tell" for="yourMessage">
						Pray Tell:
					</label>
					<textarea
						className="name-email-input"
						name="yourMessage"
						rows="8"
						cols="80"
					></textarea>
					<br />
					{/* <label for="">Would you like to join the email list?</label>
                    <input type="checkbox" /> */}
					<br />
					<div className="submit-wrapper">
						<input className="submit-button" type="submit" name="" />
					</div>
				</form>
				<br />
				<a href="#header">Home</a>
			</div>
		</div>
	)
}

export default Contact
