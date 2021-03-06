import React from "react"
import { Link } from "react-router-dom"
// import {
// 	about,
//   beauty,
//   excitement,
//   adventure,
//   travel,
// } from "../constants/BeatContent.js"

/* This is a navbar component that heads all the pages except the Splash and 
Contacts */

function HeaderSub({name}) {
 
  const style =`content-heading ${name}-text`

	return (
		<div className="headerSub-box">
      <Link to="/">
        <img
          className="headerSub-logo"
          src="images/AEB-logo-final.png"
          alt="logo: green winged letter B in front of a pink and blue pyramid in front of a yellow circle"
        />
      </Link>
        
      <h1 className="myname myname-headerSub"><Link to="/adventure">a</Link>llan <Link className="e" to="/excitement">E</Link>  <Link to="/beauty">b</Link>ot<Link to="/travel">t</Link></h1>      
      <h2 className={style} >{name}</h2>
      {/* These dot boxes are actually the colored boxes from the Splash page 
      styled down to dots to reuse their code.  If you look close enough you'll 
      tice they are not perfectly round. They also link color coded to their 
      appropriate pages */}
      <div className="dot-box">
        <Link id="nav-dot" className="spl_bx-rBottom" to="/beauty" alt="beauty button" title="beauty"></Link>
        <Link id="nav-dot" className="spl_bx-rTop" to="/excitement" alt="excitement button" title="excitement"></Link>
        <Link id="nav-dot" className="splash-box-left" to="/adventure" alt="adventure button" title="adventure"></Link>
        <Link id="nav-dot" className="splash-box-bottom" to="/travel" alt="travel button" title="travel"></Link>
      </div>
      
      <div className="hyperlinks-headerSub">
				<Link className="hyperlinks-navButton-headingSub" to="/about">
					about
				</Link>
				<Link className="hyperlinks-navButton-headingSub hyperlinks-navButton-headingSub-contact" to="/contact">
					contact
				</Link>
				<Link className="hyperlinks-navButton-headingSub"  to="/projects">
					projects
				</Link>
			</div>
		</div>
	)
}

export default HeaderSub
