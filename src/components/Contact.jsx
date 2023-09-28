import React from 'react';
// import { Link } from "react-router-dom"

/* I decided to put the footer here since this is probably where you'll go last 
if you were interested in anything you saw here.  I didn't like the idea of 
having it at the bottom of every page. */
import Footer from './Footer';

function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='banner-row' data-testid='contact-container'>
        <div>
          {/* <h1 className="myname-contact">allan E bott</h1> */}
          <div className='contact-method-row' data-testid='contact-methods'>
            <a
              href='https://www.linkedin.com/in/allan-bott/'
              target='_blank'
              rel='noopener noreferrer'
              alt="allan bott's linked in page"
              title='linked-in'
            >
              <img
                className='linkedin-img'
                src='images/linkedin.png'
                alt='linked in logo'
              ></img>
            </a>
            <a href='tel:+12068091032' alt="allan's phone number">
              <img
                className='mobile-img'
                src='images/call.png'
                alt='telephone'
                title='+1 (206) 809-1032'
              ></img>
            </a>
            {/* Just a little questionaire, human check. Not sure if it'll pop up on everything. */}
            <a href='mailto:[mercury80hg200@gmail.com]?subject=Email from allanbott.com, RE: &body=Your favorite color is: %0A%0AIf you could be an animal: %0A%0ASince you are human, what kind of robot would you like to be?: %0A%0A%0A'>
              <img
                className='email-img'
                src='images/at-sign.png'
                alt='piece of mail'
                title='mercury80hg200@gmail.com'
              ></img>
            </a>
          </div>
        </div>

        {/* <div className="logo-box">
					<img
						className="logo-contact"
						src="images/AEB-logo-final.png"
						alt="logo: green winged letter B in front of a pink and blue pyramid in front of a yellow circle"
					/>
				</div> */}

        <div className='why-list'>
          <h3>
            Why <u>contact</u> me?
          </h3>
          <ul>
            <li>collaboration</li>
            <li>hire me</li>
            <li>
              {/* I mean if you really want to, that's cool I like food too */}
              <a
                href='https://www.uber.com/ca/en/gift-cards/'
                target='_blank'
                //to prevent tabnabbing
                rel='noopener noreferrer'
                alt='Uber Eats gift card purchasing webpage'
              >
                take me out to lunch
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr size='5' noshade />
      </div>
      <div>
        <Footer />
      </div>
      {/* This is a floating home button that returns to the Splash page.  
			It's floating functionality is not noticed here since there is no scrolling.  
			It is remenant from when the site was a single page vertical scroller.  
			Once the site grew I added React-Router and then the Projects page ended 
			up getting State.  The button remains because I aesthetically liked it 
			here and also needed a route out. */}
      {/* <Link to="/" class="material-icons floating-btn">
				<span class="material-icons-round floating-btn-icon">home</span>
			</Link> */}
    </div>
  );
}

export default Contact;
