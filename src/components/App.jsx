import React from "react";
import Header from "./Header"
import Splash from "./Splash"
import Content from "./Content"
import Contact from "./Contact"
import Footer from "./Footer";

function App() {

    return (
        <div className="page">
            <Header />
            <Splash />
            <Content />
            <Contact /> 
            <Footer />
        </div>      
    )
}

export default App;       