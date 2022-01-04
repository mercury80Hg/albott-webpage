import React from "react"
import HeaderSub from "./HeaderSub"

// const { projTitle } = props

function Projects(props) {
	return (
		<div className="content-container" >
			<HeaderSub title={"projects"} />
			<div className="proj-title">
				Project Title
			</div>
			<div className="proj-content-row" >
				<div className="proj-list" >
					proj list box
				</div>
				<div className="proj-info-column" >
					<div className="proj-image">
						image
					</div>
					<div className="proj-links" >
						links
					</div>
					<div className="proj-tech-title" >
						tech title
					</div>
					<div className="proj-tech-icons" >
						tech icons row
					</div>
					<div className="proj-blog-links" >
						blog entery link
					</div>
				</div>
				<div className="proj-content-column" >
					<div className="proj-content-column-titles">
						Synopsis Title
					</div>
					<div className="synopsis-text-box" >
						Synopsis text box
					</div>
					<div className="proj-content-column-titles" >
						Story Title
					</div>
					<div className="story-text-box" >
						Story text box
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