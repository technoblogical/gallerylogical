# gallerylogical
==============

A lot like the repository gallerylogical, but a little bit different

_This is a little javascript/jQuery gallery that I built._<br/>
by <a href='https://plus.google.com/104536213394512642005?rel=author'>Chris Walker</a><br/>
(http://www.youtube.com/watch?v=Th6mGAwvQYU)<br/>

Originally, a <a href='http://www.youtube.com/watch?v=Th6mGAwvQYU' target='_blank'>jQuery gallery</a> I built for a client to display images on his webpage. It requires an ordered list alternating between listings of image locations and image descriptions. By default, WordPress will embed photos in a hyperlink. The jQuery in the plugin will then find it and read the list items and build a bunch of little boxes for the individual images. It also builds one large box to show the first image. As the small boxes are clicked, the images comntained within them display in the large box. The image descriptions appear as alt and title text on the small boxes.

##How does this thing work?
The directions to use this plugin are pretty straight forward. This isn't a polished product. I'll admit it isn't great, but it works and that's all that matters.

1. Create a directory called gallerylogical.
2. Place gallerylogical.js and gallerylogicalStyle.css in that directory.
3. Link to it from the footer. (It won't work if you put it in the header because the HTML elements aren't built when referenced there.)
4. Create an ordered list on the page.
5. Create the list items by alternating between embeded image and image description like the following.
..* The image inside of a hyperlink. (This is the default format when WordPress embeds images in a page.)
..* This is a image of a dog.
..* Image in a HyperLink
..* This is a image of a cat.
..* Image in a HyperLink
..* This is a image of a fish.
..* Image in a HyperLink
..* This is a image of a bird.
This even works when there are more than one gallery on each page.

##License
Copyright (c) 2013 Chris Walker

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

###### Miscellaneous Stuff
<a href="http://www.youtube.com/watch?feature=player_embedded&v=Th6mGAwvQYU" target="_blank"><img src="http://img.youtube.com/vi/Th6mGAwvQYU/0.jpg" 
alt="Here's the video where I built something similar!" width="240" height="180" border="10" /></a><br/>
The video is where I built this similar. My client couldn't understand the process in the other jQuery plugin I made, so I altered it to this. If you've enjoyed this or used it, I'd enjoy a boost from some kind of social media. I'd prefer Google+, but I'll take a tweet if that's what you've got. (Brother, can you spare a Like?)