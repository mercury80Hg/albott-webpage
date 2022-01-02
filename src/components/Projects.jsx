import React from "react"
import HeaderSub from "./HeaderSub"
 
function Projects() {
	return (
		<div className="content-container" >
			<HeaderSub title={"projects"} />
				<a
					className="hyperlinks"
					href="https://mercury80hg.github.io/NYT-Best-Sellers-List/"
					target="_blank" 
					//prevent tabnabbing
					rel="noopener noreferrer"
				>
					projects
				</a>
		</div>
	)
}

export default Projects
