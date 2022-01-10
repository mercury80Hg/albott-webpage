import React from "react"
import { BrowserRouter, Routes, Link, Router} from "react-router-dom"
import SimpleSlider from "./SimpleSlider"
import HeaderSub from "./HeaderSub"
import { aboutImg } from "./Images"

function About() {
  return (
    <div className="content-container" id="about">
      <HeaderSub title={"about"}/>
      <SimpleSlider imgArray={aboutImg} />

      <p className="content-paragraph shadowbox">
        In the last 24 hours we have seen facilities now being created for the
        greatest and most complex exploration in man's history. We have felt
        the ground shake and the air shattered by the testing of a Saturn C-1
        booster rocket, many times as powerful as the Atlas which launched
        John Glenn, generating power equivalent to 10,000 automobiles with
        their accelerators on the floor. We have seen the site where the F-1
        rocket engines, each one as powerful as all eight engines of the
        Saturn combined, will be clustered together to make the advanced
        Saturn missile, assembled in a new building to be built at Cape
        Canaveral as tall as a 48 story structure, as wide as a city block,
        and as long as two lengths of this field.
        <br /><br />
        I believe that space travel will one day become as common as
        airline travel is today. I’m convinced, however, that the true future
        of space travel does not lie with government agencies — NASA is still
        obsessed with the idea that the primary purpose of the space program
        is science — but real progress will come from private companies
        competing to provide the ultimate adventure ride, and NASA will
        receive the trickle-down benefits.
        {/* Make the most of yourself and you are on a good path to make the most
        of life. There's plenty of things I can tell you about myself, from
        the diverse places I've lived, death, life, love. But you aren't going
        to find it on this website because half the fun is telling the story.
        I think this website probably reads more like a teaser. Hopefully as
        you explore it you can gleam a little of my personality from my cheesy
        writing and it gives you the gist of me, or maybe you are here to see
        if I'm the kind of guy with the skills necessary for your project or
        position. Hopefully there is enough information between the lines or
        in the code. Perhaps one day I'll write a book or maybe my adventures
        will only be known from oration. But for now here's a website I made
        from scratch with the tools that I've taught myself to use through
        heaps of tutorials and classes. <br />
        <br />
        For 20 years I have been the General Manager of an array of
        restaurants, working with companies and families buidling
        infrastructure, manuals and procedures, hand picking and training my
        employees and creating menus. Profit and Loss, budgets and scheduling,
        meetings and vendors, clients and customer service. In a sense I've
        been building start-ups and managing corporate branches and teams my
        whole career, the flavor of business is the only thing that has
        changed as I pivot to tech.{" "} */}
      </p>
  </div>
  )
}


export default About