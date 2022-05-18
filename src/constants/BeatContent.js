import Contact from "../components/Contact"
import Projects from "../components/Projects"
import {
	aboutImg,
	adventureImg,
	beautyImg,
	excitementImg,
	travelImg,
} from "./Images"

// ABOUT
export const about = {
	title: "about",
	images: aboutImg,
	text: (
		<p className="content-paragraph shadowbox">
			<p>
				Wind in the rigging, a cobra in the rafters, an elephant roars to the
				rising sun. Sleep is taken between the lines when life is lived
				progressively. In this world that everyone rides on, the greatest crime
				is to not experience as much of it as possible.{" "}
				<span style={{ color: "#054eb4" }}>Beauty</span>,{" "}
				<span style={{ color: "#01805c" }}>excitement</span>,{" "}
				<span style={{ color: "#ec008c" }}>adventure</span> and{" "}
				<span style={{ color: "#f0e54bd8" }}>travel</span> aren’t hashtags, they
				are the core of it all. Yes those sentiments are ambiguous but for me
				they comprise the <span style={{ color: "#054eb4" }}>B</span>
				<span style={{ color: "#01805c" }}>E</span>
				<span style={{ color: "#ec008c" }}>A</span>
				<span style={{ color: "#f0e54bd8" }}>T</span> of life, a way to approach
				the world. Or this could just be a bunch of Allan Ipsum and means
				nothing.
			</p>

			<p>
				For 20 years Allan was a restaurateur managing eateries in many bustling
				corners of the u.s.a. During that time he enjoyed making friends with
				people from all walks of life, honing his personal and professional
				skills.
			</p>
			<p>
				However, it is only when you reach the top of a precipice that you can
				then more easily see you are surrounded by peaks. Having reached a
				plateau in hospitality with a solid set of skills Allan decided to
				search for a mountain with no peak. Software became that endless goal of
				constant learning where one can master something only for it to be
				deprecated shortly after. Technology is ever-changing and feeding off
				new faster programming and New is not every year but every day. The
				endless landscape of software, where the jack-of-all gets farther ahead.
			</p>
		</p>
	),
}

// BEAUTY
export const beauty = {
	title: "beauty",
	images: beautyImg,
	text: (
		<p className="content-paragraph shadowbox">
			<p>
				Photographs can be the greatest betrayal of beauty. A great photographer is
				only trying to find the best possible way to capture a scene or moment,
				and even the best camera person will always admit that being there is
				always better. Yet a photograph is still beautiful even though it's
				trying to represent something even greater. The photos here{" "}
				<span title="but they are to me">may not be the best, </span>
				but they are markers to memories of the adventure.
			</p>
		</p>
	),
}

// EXCITEMENT
export const excitement = {
	title: "excitement",
	images: excitementImg,
	text: (
		<p className="content-paragraph shadowbox">
			<p>
				'Oomph.' What a great word. It's a sound, it's a noun, it's a perfect
				way to be exciting. If you don't have oomph you can always just pretend
				you do on social media, but being exciting should lead to the exciting,
				so why not just have some oomph. Without some danger then how fun can it
				be?
			</p>
		</p>
	),
}

// ADVENTURE
export const adventure = {
	title: "adventure",
	images: adventureImg,
	text: (
		<p className="content-paragraph shadowbox">
			<p>
				<span title="James Stewart, George Bailey - It's a wonderful life.">
					Anchor chains, plane motors and train whistles
				</span>{" "}
				may be the most exciting sounds in the world, but it's the stories they
				tease in our future that make them so. Fear of the unknown gives way to
				the growth of the known. New languages learned, places discovered, foods
				eaten and diseases vanquished. They are all catalogued in the wake of
				your adventure. Failures co-mingle with successes and lessons are
				learned but boredom will always be left behind as long as you're seeking
				the abnormal. Adventure.
			</p>
		</p>
	),
}

// TRAVEL
export const travel = {
	title: "travel",
	images: travelImg,
	text: (
		<p className="content-paragraph shadowbox">
			<p>
				Blood, sweat and tears don't have to mean toiling, but they are probably
				the makings of a good story, a story you could never have told without
				some wanderlust itches being scratched. It's a great comedy that the
				world is so large and our lives are so short and it's an even greater
				tragedy to not have experienced as much of it as possible. An adventure
				never happens standing still.
			</p>
		</p>
	),
}

// PROJECTS
export const projects = {
	title: "Projects",
	text: <Projects />,
}

// CONTACT
export const contact = {
	title: "Contact",
	text: <Contact />,
}

const pageContent = {
	travel,
	adventure,
	excitement,
	about,
	beauty,
	projects,
	contact,
}

export default pageContent
