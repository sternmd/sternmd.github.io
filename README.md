# [sternmd.github.io](https://sternmd.github.io/)

![sternmd](http://s32.postimg.org/6jlgwfh8k/Screen_Shot_2016_05_05_at_9_38_42_AM.jpg)

## OUTLINE
About: This Github Pages account will be used as my working portfolio.

Technologies used: HTML5/CSS3, Less, Javascript, jQuery.

## WIREFRAMES

![sternmd_portfolio](http://s32.postimg.org/yb1s67h50/sternmd_wireframe.jpg)


## SIMPLE PSEUDOCODE

* Setup dev environment with Express generate, Less, Gulp.

* Positioning should be absolute for opening menu section.

* Use color palette: Ember (#E74C3C), Grey (#555), white (#FFF).

* Create Typefaces: Brandon Grotesque Regular & Brandon Grotesque Black.

* Modernizr, smooth scrolling, css animations, & SVGs to improve UX.

* Opening section should change colors from grey to white on scroll.

* Navbar should change position on scroll.

* Work section should flip to display text on hover. Insert sitelink, repository, and about the project. This along with media queries will take the longest time.

* Set proper media queries for mobile.

### SIDENOTES, HIGHLIGHTS, & APPROACHES

Self-rendering animation, using SVG strokepaths:
```JS
var spacemonkey = {
    "spacemonkey": {
        "strokepath": [
            {
                "path": "M533.047,343.884l-7.439,24.449   c0,0,22.856-12.755,31.895-9.568l-28.173,13.288v3.723L566,386.939l-40.924-7.443l9.565,10.103l4.253,0.533   c0,0,80.268,85.049,79.729,128.102c0,0,19.138-22.855,10.098-56.875l28.179-8.504c0,0-5.846-32.961-14.347-49.435l-40.401,15.947   l-30.829-64.851l32.428-14.354c0,0-8.506-15.947-17.545-20.731c0,0-9.569,11.692-23.385,16.477   C548.994,340.693,533.047,343.884,533.047,343.884z",
                "duration": 800
            }, ...
            ],
            "dimensions": {
                "width": 782,
                "height": 869
            }
          }
};

 $(document).ready(function(){
 $('#spacemonkey').lazylinepainter(
 {
    "svgData": spacemonkey,
    "strokeWidth": 2,
    "strokeColor": "#E74C3C"
}).painter('paint');
 });

```

Scroll functions for fading in and out navbars
```js

$(window).scroll(function() {
	  if ($document.scrollTop() >= (windowHeight * 0.8)) {
		// user scrolled 50 pixels or more;
		$(".navi_fade").fadeIn(700);
	  }
	  else {
		 $(".navi_fade").fadeOut(300);
	  }
});

$(window).scroll(function() {

 if ($(this).scrollTop()>400)
  {
     $('.work_link').fadeOut();
     $('.about_link').fadeOut();
     $('.contact_link').fadeOut();
  }
 else
  {
    $('.work_link').fadeIn();
    $('.about_link').fadeIn();
    $('.contact_link').fadeIn();
  }
});
```
