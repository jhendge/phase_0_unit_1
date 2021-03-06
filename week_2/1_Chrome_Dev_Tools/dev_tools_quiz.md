#### Include an inline screenshot of your codeschool's points from the profile page:

![Code School Points](imgs/Code_School_Points.jpg)﻿

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  * Javascript Debugging
  * Performance Optimization 

* What's the quick key for your OS to spawn the Dev Tools inspector?

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated?


Answers:

* Realtime editing of HTML and CSS occurs on the Elements and Sources tabs. The elements tab allows users to look through individual pieces of html and its corresponding CSS in order to make changes and see them reflected immediately. The sources tab allows users to do this but it allows them to save the changes to actual source files, thus making the changes a bit more permanent. 
* Javascript debugging occurs on the Network and Sources tabs. The network tab notifies users of any errors that might have occured in HTML, CSS, and JavaScript files, as well as images and others. The sources tab them allows for changes to be made to see if the JavaScript can be fixed.
* Performance Optimization occurs on the PageSpeed (loaded from the Chrome Web Store - not a standard tab) and Network tabs. PageSpeed will tell users ways that the web page can increase its performance and the network tab will show specifically what can be addessed and fixed.

* The keyboard shortcut to open DevTools on my Mac is option/command/i

* The current background color for the page is #0b0f11
* The background color was tweaked to white
* I tweaked the sidebar that contains the logo so that it was 85px
* I fixed the nav link hovers so that it is black
* Screenshot complete
* Uploaded to the imgs directory in 1_Chrome_Dev_Tools as Postmachina.jpg

* I'm not totally sure. I originally thought that this was some kind of read only image file but that was clearly not the case when the HTML file showed that it was text. I definitely tried changing the text and playing with the currounding elements but didn't have much luck. I'm super intrigued by this now! Is the text actually part of the background, that's why it can't be changed? You would need to change the background in order to get the text to be changed?

* 92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png
* In order to find this info, navigate to the Network tab and order the files from largest to smallest, and click on the largest image link. To get more specifics, click on the preview tab after you've click on the link.
http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

* Reduce blocking resources - Inline small CSS. Because this isn't one specific file or image, I'm not entirely sure how many kilobytes of data can be eliminated. How exactly can I find this out? 