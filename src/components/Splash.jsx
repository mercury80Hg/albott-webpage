import React from "react"
import Header from "./Header"
import { Link } from "react-router-dom"

function Splash() {
    return (
        <div className="splash">
            <Header />
            <div className="splash-boxes">
                <Link className="splash-box-left" to="/adventure" alt="adventure button">adventure</Link>
                <div className="splash-logo-group">
                        <div className="img-wrapper">
                            <img className="logo" src="images/AEB-logo-final.png" alt="logo: green winged letter B in front of a pink and blue pyramid in front of a yellow circle"/>
                        </div> 
                    <Link className="splash-box-bottom" to="/travel" alt="travel button">travel</Link>
                </div>
                <div className="splash-box-right">
                    <Link className="spl_bx-rTop" to="/excitement" alt="excitement button">excitement</Link>
                    <Link className="spl_bx-rBottom" to="/beauty" alt="beauty button">beauty</Link>
                </div>
            </div>
        </div>
        
    )
}


export default Splash