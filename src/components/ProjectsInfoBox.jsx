import React from "react"


/* ProjectInfoBox is essentially the right couple boxes (of 3) of the body's row.  
The first left box with all the project selection buttons are not part of 
ProjectInfoBox, nor is the HeaderSub which contains all the navbar items.  
This was separated from the rest in order to display different content depending on 
the project selected while still being able to navigate to the others by keeping 
the project selections visible.  It was supposed to go along with reusing code 
and implementing state and all the good things with it. It also is not dispalyed
at all when initially visited. */

function ProjectsInfoBox({ projObj }) {
	return (
		<>
			<div className="proj-info-column">
				<div className="proj-image">
					<img
						className="proj-image"
						src={projObj.image}
						alt="screen shot of project"
					/>
				</div>
				<div className="proj-links">
					{/* the div displaying 'visit:' will not appear in the absence of 
					projObj.link  Link was chosen because it was more unlikely to be a blog
					button or a github if there wasn't a project to link to*/}
					{projObj.link && <div className="proj-info-column-title">visit:</div>}
					{/* all the buttons below will not be rendered if the data is absent */}
					<div className="proj-links-buttons">
						{projObj.link && (
							<a
								className="hyperlink-button hyperlink-button-proj"
								target="_blank"
								rel="noopener noreferrer"
								href={projObj.link}
							>
								project
							</a>
						)}

						{projObj.blog && (
							<a
								className="hyperlink-button hyperlink-button-proj"
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
								className="hyperlink-button hyperlink-button-proj"
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
