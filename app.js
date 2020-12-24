new Vue({
    el: '#vue-app',
    data: {
        name: 'Pepe',
        website: 'http://www.google.com',
        websiteTag: '<a href="www.youtube.com">Another Website</a>',
    },
    methods: {
		greet: function(time){
			return 'Good ' + time + ' ' + this.name;
		}
	}

});