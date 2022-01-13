import React, { useState } from "react"
import { Link } from "react-router-dom"
import HeaderSub from "./HeaderSub"
import {
	ab,
	blog,
	home,
	ohmgd,
	scratchPad,
	photography,
	nytbs,
} from "./ProjectsContent"
import ProjectsInfoBox from "./ProjectsInfoBox"
import ComingSoon from "./ComingSoon"

function Projects() {
	const [projObj, setprojObj] = useState(home)
	// const [projObj, setprojObj] = useState(null)

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
							onClick={() => handleClick(blog)}
						>
							blog
						</div>
						<div
							className="proj-hyperlinks"
							onClick={() => handleClick(photography)}
						>
							photography
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
