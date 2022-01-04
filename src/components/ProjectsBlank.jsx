import React, { useState } from "react"
import { Link } from "react-router-dom"
import HeaderSub from "./HeaderSub"
import { ab, blog, home, ohmgd, scratchPad, photography, nytbs } from "./ProjectsContent"


function Projects(props) {
  const [projObj, setprojObj] = useState(home)

  function handleClick(obj) {
    setprojObj(obj)
  }

	return (
		<div className="content-container" >
			<HeaderSub title={"projects"} />
			<div className="proj-title">
				{projObj.title}
			</div>
			<div className="proj-content-row" >
				<div className="proj-list" >
          <div className="proj-list-box " >
            <div className="proj-hyperlinks" onClick={() => handleClick(ab)}>allanbott.com</div>
            <div className="proj-hyperlinks ohmgd-hyperlinks" onClick={() => handleClick(ohmgd)}>ΩhmGD</div>
            <div className="proj-hyperlinks " onClick={() => handleClick(nytbs)}  >NYT Best Sellers</div>
            <div className="proj-hyperlinks blog-hyperlinks" onClick={() => handleClick(blog)}>blog</div>
            <div className="proj-hyperlinks" onClick={() => handleClick(photography)}>photography</div>
          </div>
				</div>
				<div className="proj-info-column" >
					<div className="proj-image">
						{projObj.image}
					</div>
					<div className="proj-links" >
            {projObj.links}
					</div>
					<div className="proj-tech-title" >
           tech 
					</div>
					<div className="proj-tech-icons" >
            {projObj.icons} 
					</div>
					<div className="proj-blog-links" >
            projObj.blog
					</div>
				</div>
				<div className="proj-content-column" >
					<div className="proj-content-column-titles">
						Synopsis 
					</div>
					<div className="synopsis-text-box" >
            {projObj.synopsis}
					</div>
					<div className="proj-content-column-titles" >
						Story 
					</div>
					<div className="story-text-box" >
            {projObj.story}
					</div>
				</div>
			</div>

			
		</div>
	)
}

export default Projects


	{/* <a
					className="hyperlinks"
					href="https://mercury80hg.github.io/NYT-Best-Sellers-List/"
					target="_blank" 
					//prevent tabnabbing
					rel="noopener noreferrer"
				>
					go to NYT Best Sellers API page
				</a> */}