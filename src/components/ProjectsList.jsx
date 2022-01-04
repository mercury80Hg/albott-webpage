import React from "react"
import Projects from "./Projects"
import { nytbs } from "./ProjectsContent"


export let projName = <Projects />

function ProjectsList() {

  function handleNytbs() {
    projName = <Projects projObj={nytbs} />
  }

  return (
    <div className="proj-list-box " >
      <div className="proj-hyperlinks">allanbott.com</div>
      <div className="proj-hyperlinks ohmgd-hyperlinks">ΩhmGD</div>
      <div className="proj-hyperlinks " onClick={handleNytbs} >NYT Best Sellers</div>
      <div className="proj-hyperlinks blog-hyperlinks">blog</div>
      <div className="proj-hyperlinks">photography</div>
    </div>
  )
}

export default ProjectsList 