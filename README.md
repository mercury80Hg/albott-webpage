

# Allan Bott's Personal Webpage (Portfolio Vehicle)

This is a portfolio project that also acts as a venue for other projects.  I wanted to create a small personal page that gives you a vibe of who I am, but displays my projects with more description and explanation.  Just something nice to help with the hiring process.  This website isn't really going to tell you a ton about me as person, but will hopefully give you a look at some of my tech and personal skills.

### Tech Stack
- React
- React-Router
- Javascript
- CSS
- HTML

Below you'll find my documentation notes on styles I went with and some instructions on adding projects.

## Style

Style themes and motifes run throughout the website.  Here are the fonts, spacing, colors, gradients and shapes to adhere to when creating new pages, content, boxes, buttons... etc.

  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-spacing: 
  font-color: #335;
  font-size: used vh to maintain format and styling on resizing and different screen sizes.  Might convert to rem but I like it right now despite the appropriateness.
	font-weight: lighter;
	letter-spacing: 0.3vw;

  border: 1px;
  border-radius: 5px;
  border-color: #335;



### Buttons
All Buttons follow the border rules of (solid 1px #335) with a radius of 5px.  Grouped buttons will be arranged with straight border dividers depending on vertical or horizontal nature.  You can find current examples of each, Vertical: in the HeaderSub that is present in the top right corner of all the pages except Splash and Contacts.  They are also present in larager form on the left side of the Projects page.  Horizontal: on the Splash page in the top left.

All Buttons highlite on hover with Magenta ( #ec008c) with white text (#fff)

The exception to this is the floating-home-button which highlights Yellow.  Similar non-text buttons could be formatted similarly to the floating-home-button if their icon color could similarly be Magenta

### Colors

All the colors in here are motifed throughout the site.  The main four colors in the logo are the theme colors while there are other supporting colors and transparencies.  There are website pages associated to the main four theme colors assiciated to the pages title. The four page titles that have color associations are "Beauty", "Excitement", "Adventure" and "Travel".  Below you will find the colors and all their current placements and potential uses.  Colors being used will be preceded by their use with 'used:' anything else under that color are suggestions for potential uses.  Documentation may not be up to date if suggestions were implemented.

  #### Theme Colors:

  ( #ec008c rgb 236 0 140 ) - Magenta Dark -  color-association with "Adventure"
    - used: logo
    - used: color-association with "Adventure" page and found in the title bubble in the nav header
    - used: color of Home icon in floating bubble button
    - used: onHover for background of hover on buttons
    - bright attractions
    - focus attention
    ( #ec0080a0 ) subdued version
      - used: title bubble

  ( #00c18b  rgb 0 193 139 ) - Aqua Green - color-association with "Beauty"
    - used: logo
    - used: color-association with "Beauty" page and found in the title bubble in the nav header
    - used: background of floating home button
    - background (potentially subdued/opacity)
    - hover shade
    ( #00c18ba1 ) - subdued version
      - used: title bubble

  ( #fced05 rgb 252 237 5 ) - Yellow - color-association with "Travel"
    subdued : (#f0e54bd8)
    - used: logo
    - used: color-association with "Travel" page and found in title bubble in the nav header
    - used: onHover for floating "home button" found only on the "Contact" page
    - hover highlight
    - highlights
    ( #fced05a1 ) subdued version
    - title bubble
    
  #### Supporting Colors:

  ( #7ba5de ) - Periwinkle (light)
    - used: background for entire site
    - darker hightlights or shadow to lighter colors

  ( #335 rgb 51 51 85) - Black substitute (dark purple)
    - used: lines
    - used: text
    - used: borders
    - shadow

  ( #bec4d9 rgb 190 196 217 ) - White substitute
    - used: scroll box gradient
    - white substitute
    - text on dark backgrounds
    - background


## Adding Projects

Projects can be added by copying the object format in the ProjectsContent.jsx file.  You can add icons for the techologies used by adding techIcons to the array from the list or follow the instructions for adding a techIcon to the list.  As techIcons object is growing it may move to its own file hopefully aptly named TechIcons.
  - If there is no image the Projects page will render a Coming Soon component 
  - If there is no "link" the "visit:" text will not be rendered nor the "project" button 
  - If the corresponding "git" or "blog" is empty, the buttons will not display

With your newly named object for your project, properly filled out, make sure you have exported it.  Then make sure you are importing it on the list in the Projects component.  Copy a <div> segment containing an onClick with a handleClick function.  Rename the div text to your project name. Also make sure the handleClick argument is changed to the object name that was imported from ProjectsContent that was just created.
  
There might need to be some styling changes for top bottom borders.  Currently I've just been doing top/bottom borders to the div's in the middle.  So some have styling while others are doing the work for them.  If needed add 'blog-hyperlinks' to the className.
  
If you kept the classNames they should highlight the same as the others onHover.
  
I think that's all there is to it.  If you find an error make an Issue in the git.  


### Adding techIcons
  
  Adding techIcons is pretty intuitive, but for documentations sake and quick reference or reminder lets go through it.  Most of the icons were pulled from Flaticons.com which are already given credit to in the Footer  on this website so no need to add more credit if you are pulling it from there.  If not found there and credit is needed add it to the Footer component within the Resources div next to flaticons.com.  
 
  I have been keeping the image at 64px and in .png.  If they aren't transparent negative space it will look odd with white negative.  
  
  Photoshop Notes: You can delete the negative space in photoshop.  If it isn't working you may need to change the image style to rgb cause it's probably 'indexed.' You may also need to add a 0 layer by double-clicking the layer.  The double-click will pop up a prompt. Just hit enter to create it.  You should now be able to select the negative space and delete it leaving transarency.  If the double-click doesn't work that means you need to switch it to rgb.

  Once the icon images have been found, are properly transperant where necessary, relocate them to the images/tech_icons folder in the projects public folder.
  
  From there return to your code editor to ProjectsContent (unless techIcons has moved to it's own file... TechIcons?) and you can copy the format of the objects within the techIcons object.  Make sure you provide a longer full name in the 'name:' key as that acts as the title which will display when you hover over the icon.  I like that because not everyone knows the branding of everything.
  
  
  
  ## Adding Images

  To add some images to the slider carousel it's pretty simple.  Given the small size of the site I have not downgraded the image levels but some standardization in doing that may come around if perfomance becomes noticeable and you would find those standards listed here.

  Located in the "public" folder of the project you will find the "images" folder.  Inside of it you can add image files to the corresponding carousel's folder.  All of the sub-folders of "images" foler are a carousels image files except for "projects".  Projects contain images for the projects page.  TechIcons have been refferenced in this documation earlier and have their own standards.
  
  
  
  





  
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# albott-webpage
