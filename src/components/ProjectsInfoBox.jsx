import React, { useEffect, useState } from "react"

/* ProjectInfoBox is the right couple flex boxes(desktop styling) (of 3) of the body's row.  
The first left box with all the project selection nav buttons are not part of 
ProjectInfoBox, nor is the HeaderSub which contains all the top navbar items.  
This was separated from the rest in order to display different content depending on 
the project selected while still being able to navigate to the others by keeping 
the project selections visible.  It was supposed to go along with reusing code 
and implementing state and all the good things with it. It also is not dispalyed
at all when initially visited. */

function ProjectsInfoBox({ projObj }) {
	const [projText, setProjText] = useState(projObj.synopsis)

	useEffect(() => {
		return setProjText(projObj.synopsis)
	}, [projObj.synopsis])

	function handleSwitchClick(text) {
		if (projText === text) {
			return
		} else {
			setProjText(text)
		}
	}
	let synopsisCss = { backgroundColor: "#ec008cb0", color: "#fff" }
	let storyCss = { bacgroundColor: "inherit" } // CHECK THIS:  backgroundColor is spelled incorrectly!

	// switch color styling for synopsis/story
	if (projText === projObj.synopsis) {
		synopsisCss = { backgroundColor: "#ec008cb0", color: "#fff" }
		storyCss = { bacgroundColor: "inherit" }
	} else {
		storyCss = { backgroundColor: "#ec008cb0", color: "#fff" }
		synopsisCss = { bacgroundColor: "inherit" }
	}

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
				<div className="proj-content-row-titles">
					<h4
						className="proj-content-column-titles"
						style={synopsisCss}
						onClick={() => handleSwitchClick(projObj.synopsis)}
					>
						Synopsis
					</h4>
					<h4
						className="proj-content-column-titles  left-border"
						style={storyCss}
						onClick={() => handleSwitchClick(projObj.story)}
					>
						Story
					</h4>
				</div>

				<div className="synopsis-text-box shadowbox">{projText}</div>
			</div>
		</>
	)
}

export default ProjectsInfoBox
