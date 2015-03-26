var carousel = {
	element: null,

	images: [ ],

	audio: new Audio(),

	autoPlay: false,

	init: function (element, images) {
		this.element = element;
		this.images = images;

		while(element.firstChild)
			element.removeChild(element.firstChild);

		for(var i in images)
		{
			var image = images[i][0];

			var el = document.createElement('img');
			el.src = image;

			if(i == 0)
				el.className = 'current';

			element.appendChild(el);
		}

		this.attachKeyEvents();

		if(this.autoPlay)
			this.playMusic();
	},

	attachKeyEvents: function()
	{
		var me = this;

		document.addEventListener('keydown', function(event)
		{
			switch(event.keyCode)
			{
				//Right arrow key
				case 39:
					me.next();
					break;

				//Left arrow key
				case 37:
					me.prev();
					break;

				//Enter Key
				case 13:
				//Space Key
				case 32:
					me.playMusic();
					break;
			}
		});
	},

	next: function () {
		var image = this.element.getElementsByClassName('current')[0];
		var next = image.nextSibling;

		if(next == undefined)
			next = this.element.firstChild;

		image.className = '';
		next.className = 'current';

		if(this.autoPlay)
			this.playMusic();
	},

	prev: function () {
		var image = this.element.getElementsByClassName('current')[0];
		var next = image.previousSibling;

		if(next == undefined)
			next = this.element.lastChild;

		image.className = '';
		next.className = 'current';

		if(this.autoPlay)
			this.playMusic();
	},

	playMusic: function()
	{
		var image = this.element.getElementsByClassName('current')[0];

		var i = Array.prototype.indexOf.call(this.element.children, image);
		var song = this.images[i][1];
		
		var audio = this.audio;
		audio.pause();

		if(song == undefined)
			return;

		audio.src = song;
		audio.load();
		audio.play();
	}
};