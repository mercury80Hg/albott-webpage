
const techIcons = {
  
  sass: {
    path: "images/tech_icons/sass_blk_S_round.png",
    name: "sass"
  },
  react: {
    path: "images/tech_icons/react_blk_outline.png",
    name: "react"
  },
  reactAtm: {
    path: "images/tech_icons/react_blk_atom.png",
    name: "react"
  },
  ps: {
    path: "images/tech_icons/photoshop_color_rSquare.png",
    name: "adobe photoshop"
  },
  jsBx: {
    path: "images/tech_icons/js_blk_rRectangle.png",
    name: "javascript"
  },
  js: {
    path: "images/tech_icons/js_blk.png",
    name: "javascript"
  },
  ill: {
    path: "images/tech_icons/illustrator_color_rSquare.png",
    name: "adobe illustrator"
  },
  html: {
    path: "images/tech_icons/html_blk_outline_page.png",
    name: "html"
  },
  css: {
    path: "images/tech_icons/css_blk _outline_page.png",
    name: "css"
  },
  gh: {
    path: "images/tech_icons/gh_blk_outline.png",
    name: "github"
  },
  nodeJs: {
    path: "images/tech_icons/node-js_blk_rSquare.png",
    name: "node"
  },
}


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
	icons: [ techIcons.html, techIcons.css, techIcons.jsBx, techIcons.nodeJs, techIcons.reactAtm, techIcons.ps, techIcons.ill, techIcons.gh ],
	blog: "",
	synopsis: "The intention of this webpage is more for my Front End Developer portfolio than it is a true personal webpage.  It acts as a vehicle for all of my portfolio projects while being a portfolio project itself.  You will find some of my thoughts in the content as well as photography I have taken in my travels but they do not represent the more in depth stories of the adventures I’ve had.  If you are visiting to learn about my skills you should be able to see them on this personal site and in the projects section, but if you are trying to find out about me as a person this site will intentionally leave more questions than answers.",
	story: 
    <div>
      <h4>Tech</h4> <br/>
      <p>This webpage was developed in react using the usual suspects (HTML, CSS, JS).  The larger bulk of this site is rather simple, using react-router to navigate pages and then you'll find when you get to the Projects section, where you are now, this area has been implemented with React hooks State for better reusability.  I wanted to display use of router and state, while I could have also implemented state in the front portion I wanted to spread the tech use out.  You will find some logos implemented from third parties referenced in the footer.  Most of the site was built from scratch after react-create-app of cousre.</p>
      <br/>
      <h4>Images</h4> <br/>
      <p>At the moment the image carousels/sliders found throughout the site are not mine.  I have done sliders in tutorials, but liked this one for its simplicity.   The giant logo I designed myself as my personal logo.  All the photography was taken by myself except ones with me in it and a single rainy shot of Pike Place Market in Seattle taken by a friend Josh Ter Louw.</p>
      <br/>
      <h4>Colors</h4> <br/>
      <p>The color scheme you’ll see throughout is also in the logo and was derived from the many bright hues of the caribbean and tropics that bring me a sense of travel.</p>
    </div>,
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
	icons: [techIcons.html, techIcons.css, techIcons.sass, techIcons.js, techIcons.reactAtm, techIcons.gh, techIcons.nodeJs],
	blog: "https://blogityblogblog.com",
	synopsis:
		"This is pretty simple.  All I wanted was to create a little API pull for exercise from a cold start, not following a lesson or tutorial. I searched through an API list and found the NYT API returned data I could work with and set forth to build a simple site.  Of course as I went along I wanted to add more and more to make it look spectacular in my portfolio.  In the end what you see is the final product reserved significantly to the original goal.  I ended up learning to use SASS and other tech I did not start out intending to learn.  It’s all good, the product is what it is… a semi fancy yet simple New York Times Best Sellers list from their API.",
	story:
		"If you want a less techy story, I would say that I developed this site to help me be inspired to one day have enough time to read all the books on the New York Times Best Sellers List.   It’s an eternal goal since books are added every week, much like learning software development",
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
	image: "",
	link: "",
	git: "",
	icons: [],
	blog: "",
	synopsis: "",
	story: "",
}

export const photography = {
	title: "Photography",
	image: "",
	link: "",
	git: "",
	icons: [],
	blog: "",
	synopsis: "",
	story: "",
}
