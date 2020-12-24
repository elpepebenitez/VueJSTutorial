new Vue({
    el: '#vue-app',
    data: {
        name: 'Pepe',
        website: 'http://www.google.com',
        websiteTag: '<a href="www.youtube.com">Another Website</a>',
        age: 28,
        x: 0,
        y: 0,
    },
    methods: {
		greet: function(time){
			return 'Good ' + time + ' ' + this.name;
        },
        add: function(){
            this.age++;
        },
        subtract: function(){
            this.age--;
        },
        updateXY: function(event){
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert('You clicked me')
        },
	}

});