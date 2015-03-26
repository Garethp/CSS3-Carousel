# CSS3-Carousel
Small and simple carousel with music in CSS3 and pure JS

# Usage
Just include js/carousel.js and css/carousel.css and then initiate the carousel as such

```javascript
var element = document.getElementById('carousel');
var carousel = new Carousel();
carousel.init(element,
[
	['images/1.jpg', 'music/1.mp3'],
	['images/2.jpg', 'music/2.mp3'],
	['images/3.jpg']
]);
```

# Live Example
To check out my live example, visit this projects Github Page at http://garethp.github.io/CSS3-Carousel/