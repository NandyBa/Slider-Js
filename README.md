#Slider-Js
This a simple slider in Js

You must create div with class slider and put inside your img

#dependencies
JQuery
Boostsrap

#dev dependencies
gulp, gulp-uglify, gulp-concat

#Utilization

``` html
<div class="slider"> // New slider
	
	<img src="path/filename"> // You can add new image slide
	
	<img src="path/filename" data-width="400"> // You can specify width in px with data-width attribute

	<img src="path/filename" data-height="550"> // You can specify height in px with data-height attribute

	// You can specify image description with data-title and data-description  attributes
	<img src="path/filename" data-title="My photo title" data-description="One great description">
	
</div>
```