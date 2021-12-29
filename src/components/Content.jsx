import React from "react"
import SimpleSlider from "./Carousel"
import {aboutImg, adventureImg, excitementImg, beautyImg, travelImg} from "./Images"

function Content() {
	return (
		<div className="content">
			<div className="about" id="about">
			
				<h2 className="content-heading about-text" >
					about
				</h2>
				<SimpleSlider imgArray={aboutImg}/>
				
				<p className="content-paragraph">
					Make the most of yourself and you are on a good path to make the most
					of life. There's plenty of things I can tell you about myself, from
					the diverse places I've lived, death, life, love. But you aren't going
					to find it on this website because half the fun is telling the story.
					I think this website probably reads more like a teaser. Hopefully as
					you explore it you can gleam a little of my personality from my cheesy
					writing and it gives you the gist of me, or maybe you are here to see
					if I'm the kind of guy with the skills necessary for your project or
					position. Hopefully there is enough information between the lines or
					in the code. Perhaps one day I'll write a book or maybe my adventures
					will only be known from oration. But for now here's a website I made
					from scratch with the tools that I've taught myself to use through
					heaps of tutorials and classes. <br />
					<br />
					For 20 years I have been the General Manager of an array of
					restaurants, working with companies and families buidling
					infrastructure, manuals and procedures, hand picking and training my
					employees and creating menus. Profit and Loss, budgets and scheduling,
					meetings and vendors, clients and customer service. In a sense I've
					been building start-ups and managing corporate branches and teams my
					whole career, the flavor of business is the only thing that has
					changed as I pivot to tech.{" "}
				</p>
			</div>
			<div className="adventure" id="adventure">
				<h2 className="content-heading adventure-text" >
					adventure
				</h2>
				<SimpleSlider imgArray={adventureImg} />
				<p className="content-paragraph">
					Adventure, Excitement, Beauty and Travel aren't just clichés. They all
					represent pieces of the experience of life that I try to seek out in
					the things I do. All the photos on this site are from the many
					adventures and places I've lived. With such a short life and large
					planet it seems a shame to not experience as much of it as you can.
					When we meet in person ask me about any photo and I'm sure I have some
					fun and interesting stories to go with it.{" "}
				</p>
			</div>
			<div className="excitement" id="excitement">
				<h2 className="content-heading excitement-text" >
					excitement
				</h2>
				<SimpleSlider imgArray={excitementImg} />
				<p className="content-paragraph">
					Without some danger there isn't excitement. By simply paying attention
					enough you can manage you experience safely through being prepared and
					absorbing the stories of those who have gone before you. For me, I try
					to always keep moving forward and minimize the side and
					backsteps. Having a conversation with my fear has opened up some very
					fun opprotunities.{" "}
				</p>
			</div>
			<div className="beauty" id="beauty">
				<h2 className="content-heading beauty-text" >
					beauty
				</h2>
				<SimpleSlider imgArray={beautyImg} />
				<p className="content-paragraph">
					Of course there's beauty to be found in everything if you look hard
					enough, it is in the eye of the beholder and existing conventions, but
					nothing compares to an in person experience. Finding a soul in the
					strokes of a famous painting never translates when viewing a
					reproduction. Even famous photographers know that their photos are
					quietly telling you that this was the best way to capture a moment
					that is far more beautiful in person. Finally standing in the place
					you have seen numerous images of reveals the injustice of a photo. I
					hope everyone will stop to experience the small beauties around them
					and seek out the larger ones in life.{" "}
				</p>
			</div>
			<div className="travel" id="travel">
				<h2 className="content-heading travel-text" >
					travel
				</h2>
				<SimpleSlider imgArray={travelImg} />
				<p className="content-paragraph">
					In my experience the best way to understand something different is to
					try it in earnest. Having lived on four continents I can say, nothing
					gives you full apperciation and knowledge unless you actually live the
					culture. Anything else is visiting, and while you can appreciate a lot
					from a visit, living there gives you true perspective.{" "}
				</p>
			</div>
		</div>
	)
}

export default Content