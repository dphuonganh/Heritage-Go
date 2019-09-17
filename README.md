# Heritage-Go


## Héritage GO

**Heritage Go** is a social networking service dedicated to cultural and historical heritages, developed by the non-profit organization Heritage Observatory.

**Héritage Go** displays old photographs of heritages around you, wherever you are in the world. There are more than 450,000 old photographs worldwide.

**Heritage Go**: https://www.heritagego.org/

**Heritage Observatory**: https://www.heobs.org/

![heritagego_homepage.png]()


## Fundamentals

This project will teach you the **fundamentals of frontend development** using **Hypertext Markup Language (HTML), Cascading Style Sheets (CSS), and JavaScript.**

**Fundamentals of frontend development**: https://www.youtube.com/watch?v=8gNrZ4lAnAw


## Waypoint 1: Basic HTML Page

We start with a minimal HTML page index.html:

https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started

[Link Intra](https://intra.intek.io/projects/heritage-go/subject)

We have defined "**Héritage GO**" as the **document's title** that is shown in a browser's title bar or a page's tab.

We will see later what the other HTML elements, defined in this document, correspond to.

You can open with your favorite browser the `index.html` you have just created:

**Document Title :**

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title

![heritagego_undefined_charset.png]()


## Character Encoding Issue

You will already notice that the title "**Hérigate GO**" displayed in the tab of your browser has **character encoding issue**. We will be fixing that in the moment.

**Character Encoding Issue** : http://kunststube.net/encoding/

![heritagego_encoding_issue.png]()


# Waypoint 2: Specify Character Encoding

Our Web page will display English, French, and Vietnamese characters. Characters are **encoded** using a particular repertoire of characters.

By the past, there were many ways to encode Vietnamese characters, such as **VSCII, VISCII, VNI, VPS**. All these character encodings were incompatible, resulting to Vietnamese **mojibake**, for instance, when opening a document encoded with VPS while we were using a VNI font.

We use nowadays **Unicode** to encode almost every international character. It replaces all the previous deprecated Vietnamese character encodings. This a **MUST HAVE**.

We need to **declare the character encoding** used for the HTML document. We should always use the UTF-8 character encoding.

**Declare the webpage** as using the character encoding UTF-8:

You can now reload your `index.html` file in your browser. Better, uh?!




**Encoded**: https://www.w3.org/International/questions/qa-what-is-encoding

**VISCII**: https://en.wikipedia.org/wiki/VSCII

**VNI**: https://en.wikipedia.org/wiki/VNI#VNI_Encoding

**VPS**: https://en.wikipedia.org/wiki/Vietnamese_Professionals_Society

**mojibake**: https://en.wikipedia.org/wiki/Mojibake

**Unicode**: https://www.w3.org/International/articles/definitions-characters/

**Must Have**: http://tinyurl.com/h8yg9d7

**character encoding**:https://www.w3.org/International/questions/qa-html-encoding-declarations

**UTF-8** : https://en.wikipedia.org/wiki/UTF-8

**Declare the webpage**: https://www.w3schools.com/tags/att_meta_charset.asp

![heritagego_utf8_charset_defined.png]()


## Waypoint 3: Define Web Page Description

We need to add a description to this Web page. A **meta description** is an HTML attribute that provides a brief summary of a web page. It is typically up to 160 characters long. Search engines such as Google often display the meta description in search results where they can highly influence user click-through rates.

Add the content "Héritage GO is the community for heritage lovers." in a meta description of this Web page.

**Meta Description**: http://tinyurl.com/y4zy65pm


## Waypoint 4: Add Web Page Favorite Icon

**A favicon** (short for favorite icon) is a graphic image associated with a particular Web page or website. This little 16×16 pixels icon is displayed in the tab on the web browser.

**favicon:** https://en.wikipedia.org/wiki/Favicon

For example:

![heritagego_favicon_examples.png]()


## Favicon

It's not required that you use a favicon, but it can be very good for branding purposes and to ensure people recognize your site across the web.

**Adding a favicon to your Website** is theoretically quite simple, however, in order to support most browsers and platforms, you need to add and reference **a lof of icons of different sizes**. It's a **mess**! Hopefully, you don't need to manually generate all these icons and HTML code. There are a few generators that you can find online that will do the job for you.

Generate the favicons of your Web site using the image `./assets/Favicon Héritage Go 3.0.png` , add the favicons files to the root folder of your Web page, and add the HTML code referencing these favicons in the `<head>` section of your Web page's file.

You will have to trick a little bit your HTML code to get the favicon displayed properly. Update the attributes `href` of the favicon HTML code you've just added, by prefixing the reference with a character `.`:

> href="./favicon-16x16.png">

The reason is that your browser is reading a local file stored in your computer, not on the Internet. The character `.`indicates that referred file is located in the same directory than the `index.html` that has been loaded. The character `/`alone indicates the root directory of your drive (or your website).

Works better, right?

**Adding a favicon to your Website**: http://tinyurl.com/y4kpuja5

**Icons of Different sizes**: https://realfavicongenerator.net/faq#.XIxovRMzbOQ

**Reasons for mess**: https://realfavicongenerator.net/blog/favicon-why-youre-doing-it-wrong/

**Favicon Generator**:https://realfavicongenerator.net/

![heritagego_with_favicon_defined.png]()


## Waypoint 5: Define Header HTML Element Structure

Let's start designing the layout of our Web page!

The header section of the Héritage GO Web page is horizontally composed of:

1. the Héritage GO's logo;

2. Name of the detected area where the user is currently located in, decomposed in two lines, where the top line refers to the primary area, basically the city (e.g., Sa Đéc), and the bottom line refers to a secondary larger area (e.g., Đồng Tháp, Việt Nam).

3. a compass icon that allows the user to request the Web application to geolocate him more accurately;

4. button that allows the user to log-in.

Update your HTML code to add these elements following these specifications:

![Screen_Shot_2019-03-21_at_8.44.38_AM.png]()


## Blocks, Elements and Modifiers (BEM)

You MUST use the **Blocks, Elements and Modifiers (BEM)** naming convention to identify **HTML Classes**. BEM is a methodology that helps you to create **reusable components and code sharing** in front-end development.

Don't worry from now about the exact positioning of your HTML elements on the page. We will fix this in the next waypoint.



**BEM**: http://getbem.com/introduction/

**HTML Classes**: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class

**BEM101**: https://css-tricks.com/bem-101/

![heritagego_layout_no_positioning.png]()


## Waypoint 6: Position Header HTML Elements

We are going to position and align the header's HTML elements as follows:

![heritagego_header_desktop_layout.png]()


## CSS

This is what **Cascading Style Sheet (CSS)** is for. CSS is a language that describes the style of an HTML document, how HTML elements should be displayed.

Create a file `main.css` in the folder css and **link it in your HTML document**:

> <link rel="stylesheet" href="./css/main.css" />

The photograph feed section is displayed in the body of the HTML page. The content of this feed section is centered. It has a fixed width of 600 pixels.

**CSS**: https://developer.mozilla.org/en-US/docs/Web/CSS

**Linking with HTML**: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link

Update the HTML code and edit the CSS code to add these following requirements:

![Screen_Shot_2019-03-16_at_10.44.36_AM.png]()


## Flexbox

To align HTML elements of the header section, you need to use CSS **Flexible Box Module, or flexbox for short**. Flexbox is one of the two modern layout systems, along with CSS Grid. Flexbox makes **layouts flexible and intuitive**. You will many comprehensive guides to CSS flexbox layout such like **this one**, along with the more complete **sW3C Candidate Recommendation**. You can even experiment flexbox with this Flexbox Playground.



**Flexbox**: http://tinyurl.com/yb56hmug

**Flexible Layout**: https://medium.freecodecamp.org/an-animated-guide-to-flexbox-d280cf6afc35

**Layout Module**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

**W3C Candidate Recommendation**: https://www.w3.org/TR/css-flexbox/

**Flexbox Playground**: http://tinyurl.com/jtkm2be

https://www.w3schools.com/css/css3_flexbox.asp

https://css-tricks.com/autoprefixer/"

![heritagego_header_layout_flexbox.png]()


## Waypoint 7: Logo Scaling with Transition

We would like to get the website's logo image bigger when the user moves the mouse over. The size of the logo needs to increase when the user hovers over the logo image with the mouse pointer, and it needs to get back to his normal size when the user moves the mouse out of the logo image.

This can be easily done using:

**CSS pseudo-class** : `hover` to detect when the user hovers over the logo image,
and then **CSS transform**
with **CSS transitions** to smoothly **resize** the logo image.

Update your CSS file `main.css` to get the logo image resized from scale `1` to scale `1.1` when the user hovers over the logo image, and to get it back to scale `1` **when the mouse pointer leaves the logo image.**

The **origin of the transformation** needs to be the center of the logo image.

The **time of each transition animation** needs to take 100 ms to complete.

The transition needs to start **quickly**, and **decelerates gradually until the end**. You need to use the **CSS timing function** `ease-out`.

**CSS pseudo-class**:hover: https://developer.mozilla.org/en-US/docs/Web/CSS/:hover

**CSS transform**: https://developer.mozilla.org/en-US/docs/Web/CSS/transform

**CSS transitions - Smooth**: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions

**CSS- scale**: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale

**Different Transitions**: https://css-tricks.com/different-transitions-for-hover-on-hover-off/

**Transform Origin**: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin

**Transition Duration**: https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration

**Easing**: https://developers.google.com/web/fundamentals/design-and-ux/animations/the-basics-of-easing

**Transition Timing Function**: https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function

**CSS-ease out**: https://css-tricks.com/ease-out-in-ease-in-out/

The correct final animation of the logo image is the following:

![logo-image-correct-animation.gif]()


## Smooth Transition

The following animation of the logo image is missing the smooth transition back to the normal size of the logo image:

![logo-image-wrong-animation.gif]()


## Warning

When CSS3 became popular, all sorts of new features started appearing. Unfortunately, not all of them were supported across all browsers. Vendor prefixes helped developers use those new features, and have them supported instantly without having to wait for each of them to become available for every browser.

A good way to check which property is available to use without a vendor prefix is by checking the **CanIUse** service. There you can see which browser currently supports which property.

**CanIUse**: https://caniuse.com/

https://dzone.com/articles/understanding-css-vendor-prefixes


## Waypoint 8: Spin Compass Icon Around

The compass icon is used to indicate that the Web application doesn't know precisely where the user is currently located.

The human brain is hardwired to pay attention to moving objects. We would like to animate the compass icon to draw the user's attention to it. The user would then click on the compass icon to request the Web application to geolocate him more accurately.

We will see later, in this mission, how to accurately geolocate the user.

For now, let's animate the compass icon. We would like to spin it around (like a record), for ever. This is what **CSS transitions** and **CSS animation** are used for.

A CSS transition lets you create gradual transitions between the values of specific **CSS properties**. The behavior of these transitions can be controlled by specifying their timing function, duration, and other attributes.

A CSS animation allows to animate **transitions** from one CSS style configuration to another. It consists of two components, a style describing the CSS animation and a set of **keyframes** that indicate the start and end states of the animation’s style, as well as possible intermediate waypoints.

Spinning the compass icon is quite easy. We simply need to define a transition of 360 degrees, and include this transition in an CSS animation statement composed of only one waypoint. Then we add the corresponding CSS class to the compass icon's HTML element. The result is the following animation:


**CSS transitions**: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions

**CSS animation**: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations

**transitions**: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions

**keyframes**: https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes

![heritagego-compass-icon-spinning-around.gif]()


## Update

Update your `index.html` and `main.css` files to include this animation.


## Waypoint 9: Define Header Responsive Layout

**Responsive Web design (RWD)** is an approach to Web design that automatically **resize, hide, shrink, or enlarge**, the content of a Web page, to make it **look good on all devices** (desktop, tablet, mobile phone).

We need to update the CSS code of our web page so that when the user shrinks the width of his browser, the web page adjusts the position of the login button, of the location area, and the logo image:

* the login button keeps aligned to the right of the Web page with a margin of 24 pixels;

* the area name & compass icon section keeps aligned to the right of the main section of the document as long as there is a minimal margin of 24px between this section and the login button;

* the area name & compass icon section moves on the left to respect the margin constraint of 24px between this section and the login button.

**Responsive web design(RWD)**: https://en.wikipedia.org/wiki/Responsive_web_design

**RWD Basics**: https://developers.google.com/web/fundamentals/design-and-ux/responsive/

**RWD Fundamentals**: https://www.udacity.com/course/responsive-web-design-fundamentals--ud893

The page should appear this way on a mobile phone:

![heritagego_header_mobile_layout.png]()


## Update

Update the HTML code and create the CSS code to add these following requirements when the size of the screen is under 600 px:

![Screen_Shot_2019-03-16_at_11.55.56_AM.png]()


## End result

The end result should be similar to the following:

![heritagego_header_web_responsive_design.gif]()


## Waypoint 10: Integrate Héritage GO RESTful API JavaScript Library

In the next waypoints, we will need to fetch photograph data from both **Héritage GO** and **Heritage Observatory's** RESTful API servers to render the feed with photograph posts.

We provide the JavaScript file `heritagego-service.1.0.0.js` located in the folder `js` that will handle the communication with these 2 RESTful API servers for you.

This script relies on a fast, small, and feature-rich JavaScript library: **jQuery**. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

To include this JavaScript library, you can download file `jquery-x.y.z.min.js` to your `js` folder, and **reference it in your HTML document** as follows:

> <script src="js/jquery-3.2.1.min.js"></script>

*Note*: as **Google HTML/CSS Style Guide** indicates, **do not use** `type` **attributes for style sheets** (unless not using CSS) and scripts (unless not using JavaScript).

A better way is to reference this file hosted in a **Content Delivery Network (CDN). For example**:

> <script
> src="https://code.jquery.com/jquery-3.3.1.min.js"
> integrity="sha384-tsQFqpEReu7ZLhBV2VZlAu7zcOV+rXbYlF2cqB8txI/8aZajjp4Bqd+V6D5IgvKT"
> crossorigin="anonymous">
> </script
