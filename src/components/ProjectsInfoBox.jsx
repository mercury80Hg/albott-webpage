import React from "react"
import SimpleSlider from "./Carousel"
import { home } from "./ProjectsContent"

function ProjectsInfoBox({ projObj }) {
	return (
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
							>
								blog
							</a>
						)}
						{projObj.git && (
							<a
								className="hyperlink-button"
								target="_blank"
								rel="noopener noreferrer"
								href={projObj.git}
								alt="link to github for the project"
							>
								github
							</a>
						)}
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
			<div className="proj-content-column">
				<h4 className="proj-content-column-titles">Synopsis</h4>
				<div className="synopsis-text-box shadowbox">{projObj.synopsis}</div>
				<h4 className="proj-content-column-titles">Story</h4>
				<div className="story-text-box shadowbox">{projObj.story}</div>
			</div>
		</>
	)
}

export default ProjectsInfoBox
