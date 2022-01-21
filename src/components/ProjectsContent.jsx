/* these techIcons are the locations of the tech image files.  They are done 
as an object with a name so that I can add them as a title value so that full 
names of the icons are displayed when hovering over them.  I suppose its ADA 
friendly, but sometimes you dont't know every tiny obscure tech icon so at 
least you can hover to see what it is. */

//this techIcons object should be moved to it's own file as it has grown a lot
const techIcons = {
	sass: {
		path: "images/tech_icons/sass_blk_S_round.png",
		name: "sass",
	},
	react: {
		path: "images/tech_icons/react_blk_outline.png",
		name: "react",
	},
	reactAtm: {
		path: "images/tech_icons/react_blk_atom.png",
		name: "react",
	},
	ps: {
		path: "images/tech_icons/photoshop_color_rSquare.png",
		name: "adobe photoshop",
	},
	jsBx: {
		path: "images/tech_icons/js_blk_rRectangle.png",
		name: "javascript",
	},
	js: {
		path: "images/tech_icons/js_blk.png",
		name: "javascript",
	},
	ill: {
		path: "images/tech_icons/illustrator_color_rSquare.png",
		name: "adobe illustrator",
	},
	html: {
		path: "images/tech_icons/html_blk_outline_page.png",
		name: "html",
	},
	css: {
		path: "images/tech_icons/css_blk _outline_page.png",
		name: "css",
	},
	gh: {
		path: "images/tech_icons/gh_blk_outline.png",
		name: "github",
	},
	nodeJs: {
		path: "images/tech_icons/node-js_blk_rSquare.png",
		name: "node",
	},
	ae: {
		path: "images/tech_icons/after-effects_color_rSquare.png",
		name: "adobe after effects",
	},
	avid: {
		path: "images/tech_icons/avid_color_round.png",
		name: "avid film editor",
	},
	finalCut: {
		path: "images/tech_icons/Final_Cut_color_logo.png",
		name: "final cut",
	},
	finalDraft: {
		path: "images/tech_icons/final-draft_color_logo.png",
		name: "final draft script writer",
	},
	id: {
		path: "images/tech_icons/indesign_color_rSquare.png",
		name: "adobe in design",
	},
	premiere: {
		path: "images/tech_icons/premiere_color_rSquare.png",
		name: "adobe premiere",
	},
	xd: {
		path: "images/tech_icons/xd_color_rSquare.png",
		name: "adobe xd",
	},
	apple: {
		path: "images/tech_icons/apple_blk_rSquare.png",
		name: "apple",
	},
	ejs: {
		path: "images/tech_icons/ejs_blk_tag.png",
		name: "embedded Js",
	},
	exp: {
		path: "images/tech_icons/Expressjs.png",
		name: "express",
	},
	mongo: {
		path: "images/tech_icons/mongodb_color_logo.png",
		name: "mongodb",
	},
}

/* Each of these objects are being used as pieces to the rendering of the 
Projects component page, also currently including content */

/* NOTE: currently there exists conditional rendering based on whether there is 
an image present or not.  If no image is supplied then the COMING SOON is 
rendered instead. */

export const home = {
	title: "",
	image: "",
	link: "",
	git: "",
	icons: [],
	blog: "",
	synopsis: "",
	story: "",
}

export const ab = {
	title: "allanbott.com",
	image: "images/projects/ScreenShot_albottWebsite.png",
	link: "https://allanbott.com",
	git: "https://github.com/mercury80Hg/albott-webpage",
	icons: [
		techIcons.html,
		techIcons.css,
		techIcons.jsBx,
		techIcons.nodeJs,
		techIcons.reactAtm,
		techIcons.ps,
		techIcons.ill,
		techIcons.gh,
	],
	blog: "",
	synopsis: (
		<p>
			The intention of this webpage is more for my Front End Developer portfolio
			than it is a true personal webpage. It acts as a vehicle for all of my
			portfolio projects while being a portfolio project itself. You will find
			some of my thoughts in the content as well as photography I have taken in
			my travels but they do not represent the more in depth stories of the
			adventures I've had. If you are visiting to learn about my skills you
			should be able to see them on this personal site and in the projects
			section, but if you are trying to find out about me as a person this site
			will intentionally leave more questions than answers.
		</p>
	),
	story: (
		<div>
			<h4>Tech</h4> <br />
			<p>
				This webpage was developed in react using the usual suspects (HTML, CSS,
				JS). The larger bulk of this site is rather simple, using React-Router
				to navigate pages and then you'll find when you get to the Projects
				section, where you are now, this area has been implemented with React
				Hooks and State for better reusability. I wanted to display use of
				Router and State. While I could have also implemented State in the front
				portion I wanted to spread the tech use out. You will find some logos
				implemented from third parties referenced in the footer loacated on the
				Contact page. Most of the site was built from scratch after
				"react-create-app" of cousre.
			</p>
			<br />
			<h4>Images</h4> <br />
			<p>
				At the moment the image carousels/sliders found throughout the site are
				not mine. I have created sliders in tutorials, but liked this one for
				its simplicity. The giant logo I designed myself as my personal logo.
				All the photography was taken by myself except ones with me in it and a
				single rainy shot of Pike Place Market in Seattle taken by a friend Josh
				Ter Louw.
			</p>
			<br />
			<h4>Colors</h4> <br />
			<p>
				The color scheme you'll see throughout is also in the logo and was
				derived from the many bright hues of the Caribbean and tropics that
				bring me a sense of travel. Each color is associated with a theme word.
				The theme words being Beauty, Excitement, Adventure, Travel. Altogether
				they form B.E.A.T. which becomes the acronym of the philosophy I take
				towards approaching life.
			</p>
		</div>
	),
}

export const ohmgd = {
	title: "ΩhmGD",
	image: "",
	link: "",
	git: "",
	icons: [],
	blog: "",
	synopsis: "",
	story: "",
}

export const nytbs = {
	title: "New York Times Best Sellers list API integration",
	image: "images/projects/ScreenShot_NYTBS.png",
	link: "https://mercury80hg.github.io/NYT-Best-Sellers-List",
	git: "https://github.com/mercury80Hg/NYT-Best-Sellers-List",
	icons: [
		techIcons.html,
		techIcons.css,
		techIcons.sass,
		techIcons.js,
		techIcons.reactAtm,
		techIcons.gh,
		techIcons.nodeJs,
	],
	blog: "https://blogityblogblog.com",
	synopsis: (
		<p>
			This is pretty simple. All I wanted was to create a little API pull for
			exercise from a cold start, not following a lesson or tutorial. I searched
			through an API list and found the NYT API returned data I could work with
			and set forth to build a simple site. Of course as I went along I wanted
			to add more and more to make it look spectacular in my portfolio. In the
			end what you see is the final product reserved significantly to the
			original goal. I ended up learning to use SASS/SCSS and other tech I did
			not start out intending to learn. It's all good, the product is what it
			is… a semi fancy yet simple New York Times Best Sellers list from their
			API.
		</p>
	),
	story: (
		<p>
			If you want a less techy story, I would say that I developed this site to
			help me be inspired to one day have enough time to read all the books on
			the New York Times Best Sellers List. It's an eternal goal since books are
			added every week, much like learning software development
		</p>
	),
}

export const scratchPad = {
	title: "Scratch Pad",
	image: "",
	link: "",
	git: "",
	icons: [],
	blog: "",
	synopsis: "",
	story: "",
}

export const blog = {
	title: "My Blog",
	image: "images/projects/ScreenShot_Blog.png",
	link: "https://polar-anchorage-37592.herokuapp.com/",
	git: "",
	icons: [
		techIcons.html,
		techIcons.css,
		techIcons.nodeJs,
		techIcons.ejs,
		techIcons.mongo,
		techIcons.exp,
	],
	blog: "",
	synopsis: (
		<p>
			Very rudimentary blog I did with a tutorial from Dr. Angela Yu using ejs
			and mongoose db deployed on heroku. It's not pretty but I wanted to put
			some notes out there on my experiences with the New York Times API and to
			give a nice snippet of my poblem solving paths.
		</p>
	),
	story: (
		<p>
			I like the idea of a blog, but I feel you need to keep up on entries to
			keep people interested in visiting it. However, not every day or week is
			as interesting as the next so you'd better be a great or intersting writer
			that can make the mundane amusing or your blog quality will just feel
			forced, and we have plenty of that on the internet already. If I decdide
			later to actually do some sort of blogging I will completely start from
			scratch in designing a site. This blog is not representative of quality,
			it is acting as a quick vehicle for the content. The blog does however at
			the very least display the ability to follow blueprints and direction.
		</p>
	),
}

export const photography = {
	title: "Photography",
	image: "/images/OB_sunsetPierPhotographer.jpeg",
	link: "https://www.instagram.com/mercury80hg200/",
	git: "",
	icons: [
		techIcons.ps,
		techIcons.ill,
		techIcons.premiere,
		techIcons.avid,
		techIcons.finalCut,
		techIcons.finalDraft,
	],
	blog: "",
	synopsis: (
		<p>
			Formally trained in Film Direction at Columbia in Chicago many
			photography, lighting, filming, editing and composition classes later have
			improved my capturing of a more aesthetic photo. Pretty much every image
			on this website has been taken by me and used to add a more vibrant visual
			element. Hopefully you enjoy some of them, but at the very least they
			serve to remind me of certain stories in my past.
		</p>
	),
	story: (
		<p>
			While I did not pursue a film career after college, as a trained director
			you have to learn every aspect of your field from cinematography, script
			writing, budgeting, coaching, training, hiring, film editing, producing
			and pitching. A complete knowledge of all the components is necessary, but
			truly at the heart of it you are managing people. I put my knowledge of
			leading a crew into the hospitality industry as a General Manager with
			great results.
		</p>
	),
}

export const logo = {
	title: "",
	image: "images/AEB_logo_drafts.jpg",
	link: "",
	git: "",
	icons: [techIcons.ill, techIcons.ps, techIcons.apple],
	blog: "",
	synopsis: (
		<p>
			The artist formerly known as Allan? A small religious order? A green
			wing-tipped B in front of a pink pyramid eclipsing a sun? Newly discovered
			hieroglyphics? I don't know, it's just my brand logo. That signature I can
			put on all the stuff I do, the wax seal for my projects.
		</p>
	),
	story: (
		<p>
			A lot of doodling and refining eventually led to the symbol you see as my
			personal logo. At first I was playing around with a Flying A, like a big A
			with wings to each side. After a while it became a wing-backed B then I
			played with other letters of my name and started smashing them together.
			With a little imagination and some hard looking you can find the shape of
			each of the letters in my name. Maybe someday I'll make a gif animation to
			illuminate it. The colors came from a love of all the vibrant colored
			homes of neighborhoods in the tropics. I always loved those colors and
			have always felt bright hues bring a lot of joy to people.
		</p>
	),
}
