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

function Projects(props) {
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

				{projObj.image ? (
					<>
						<div
							className="proj-info-column"
							style={{ display: projObj == home ? "none" : "" }}
						>
							<div className="proj-image">
								<img
									className="proj-image"
									src={projObj.image}
									alt="screen shot of project"
								/>
							</div>
							<div className="proj-links">
								<div className="proj-info-column-title">visit:</div>
								<div className="proj-links-buttons">
									<a
										className="hyperlink-button"
										target="_blank"
										rel="noopener noreferrer"
										href={projObj.link}
									>
										project
									</a>
									{projObj.blog && (
										<a
											className="hyperlink-button"
											target="_blank"
											rel="noopener noreferrer"
											href={projObj.blog}
											alt="link to a blog for the project"
											style={{ display: projObj.blog == "" ? "none" : "" }}
										>
											blog
										</a>
									)}
									<a
										className="hyperlink-button"
										target="_blank"
										rel="noopener noreferrer"
										href={projObj.git}
										alt="link to github for the project"
										style={{ display: projObj.git == "" ? "none" : "" }}
									>
										github
									</a>
								</div>
							</div>
							<div className="proj-info-column-title">tech:</div>
							<div className="proj-tech-icons-box">
								{projObj.icons.map((icons) => (
									<img
										className="proj-tech-icons"
										src={icons.path}
										alt={icons.name}
										title={icons.name}
									/>
								))}
							</div>
						</div>
						<div
							className="proj-content-column"
							style={{ display: projObj == home ? "none" : "" }}
						>
							<h4 className="proj-content-column-titles">Synopsis</h4>
							<div className="synopsis-text-box shadowbox">
								{projObj.synopsis}
							</div>
							<h4 className="proj-content-column-titles">Story</h4>
							<div className="story-text-box shadowbox">{projObj.story}</div>
						</div>
					</>
				) : (
					<>Coming soon</>
				)}
			</div>
		</div>
	)
}

export default Projects
