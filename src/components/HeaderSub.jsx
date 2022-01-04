import React from "react"
import { Link } from "react-router-dom"



function HeaderSub(props) {
  const {title} = props
  const style =`content-heading ${title}-text`

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
      <h2 className={style} >{title}</h2>
      <div className="dot-box">
        <Link id="nav-dot" className="splash-box-left" to="/adventure" alt="adventure button"></Link>
        <Link id="nav-dot" className="spl_bx-rTop" to="/excitement" alt="excitement button"></Link>
        <Link id="nav-dot" className="spl_bx-rBottom" to="/beauty" alt="beauty button"></Link>
        <Link id="nav-dot" className="splash-box-bottom" to="/travel" alt="travel button"></Link>
      </div>
      
      <div className="hyperlinks-headerSub">
				<Link className="hyperlinks-navButton-headingSub" to="/about">
					about
				</Link>
				<Link className="hyperlinks-navButton-headingSub" to="/contact">
					contact
				</Link>
				<Link className="hyperlinks-navButton-headingSub"  to="/projects_blank">
					projects
				</Link>
			</div>
		</div>
	)
}

export default HeaderSub
