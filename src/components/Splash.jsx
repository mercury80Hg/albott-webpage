import React from "react"

function Splash() {
    return (
        <div className="splash">
            <div className="splash-boxes">
                <a className="splash-box-left" href="#adventure-text" alt="adventure button">adventure</a>
                <div className="splash-logo-group">
                        <div className="img-wrapper">
                            <img className="logo" src="images/AEB-logo-final.png" alt="logo: green winged letter B in front of a pink and blue pyramid in front of a yellow circle"/>
                        </div> 
                    <a className="splash-box-bottom" href="#travel-text" alt="travel button">travel</a>
                </div>
                <div className="splash-box-right">
                    <a className="spl_bx-rTop" href="#excitement-text" alt="excitement button">excitement</a>
                    <a className="spl_bx-rBottom" href="#beauty-text" alt="beauty button">beauty</a>
                </div>
            </div>
        </div>
        
    )
}


export default Splash