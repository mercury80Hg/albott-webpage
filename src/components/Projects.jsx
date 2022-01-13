/*This is the Projects page which is a component being passed data objects from ProjectsContent 
that change the state of what is displayed.*/

import React, { useState } from "react"
import HeaderSub from "./HeaderSub"
import {
	ab,
	blog,
	home,
	ohmgd,
	scratchPad,
	photography,
	nytbs,
	logo,
} from "./ProjectsContent"
import ProjectsInfoBox from "./ProjectsInfoBox"
import ComingSoon from "./ComingSoon"

function Projects() {
	const [projObj, setprojObj] = useState(home)

	function handleClick(obj) {
		setprojObj(obj)
	}

	return (
		<div className="content-container">
			<HeaderSub title={"projects"} />
			<div className="proj-title">{projObj.title}</div>
			<div className="proj-content-row">
				<div className="proj-list">
					<div className="proj-list-box ">
						<div className="proj-hyperlinks" onClick={() => handleClick(ab)}>
							allanbott.com
						</div>
						<div
							className="proj-hyperlinks ohmgd-hyperlinks"
							onClick={() => handleClick(ohmgd)}
						>
							ΩhmGD
						</div>
						<div
							className="proj-hyperlinks "
							onClick={() => handleClick(nytbs)}
						>
							NYT Best Sellers
						</div>
						<div
							className="proj-hyperlinks blog-hyperlinks"
							onClick={() => handleClick(scratchPad)}
						>
							scratch pad
						</div>
						<div
							className="proj-hyperlinks "
							onClick={() => handleClick(blog)}
						>
							blog
						</div>
						<div
							className="proj-hyperlinks blog-hyperlinks"
							onClick={() => handleClick(photography)}
						>
							photography
						</div>
						<div
							className="proj-hyperlinks"
							onClick={() => handleClick(logo)}
						>
							logo
						</div>
						
					</div>
				</div>

				{projObj == home ? (
					<div />
				) : <ProjectsInfoBox projObj={projObj} /> && projObj.image ? (
					<ProjectsInfoBox projObj={projObj} />
				) : (
					<ComingSoon />
				)}
			</div>
		</div>
	)
}

export default Projects
