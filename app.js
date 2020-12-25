Vue.component('greeting', {
    template: '<p>Hey there I am {{ name }}. <button v-on:click="changeName">Change name</button></p>',
    data: function(){
        return {
            name: 'Yoshi',
        };
    },
    methods: {
        changeName: function(){
            this.name = 'Mario'
        },
    }
});

var one = new Vue({
    el: '#vue-app',
    data: {
        name: 'Pepe',
        website: 'http://www.google.com',
        websiteTag: '<a href="www.youtube.com">Another Website</a>',
        age: 28,
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        success: false,
        error: false,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            {name: 'Ryu', age: 25},
            {name: 'Yoshi', age: 35},
            {name: 'Ken', age: 55}
        ],
        title: 'App One Title',
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
        logName: function(){
            console.log('You entered your name');
        },
        logAge: function(){
            console.log('You entered your age');
        },
        /*addToA: function(){
            console.log('I ran');
            return this.age + this.a;
        },
        addToB: function(){
            console.log('I ran');
            return this.age + this.b;
        },*/
    },
    computed: {
        addToA: function(){
            console.log('A ran');
            return this.age + this.a;
        },
        addToB: function(){
            console.log('B ran');
            return this.age + this.b;
        },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            };
        },
    },
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two', 
    },
    methods: {
        changeTitle: function(){
            one.title = "Title changed";
        },
    },
    computed: {
        greet: function(){
            return 'Hello from app two';
        },

    }
});

two.title = 'Changed from outside of the instance'

var three = new Vue ({
	el: '#vue-app-three',
	data: {
        output: 'Your fav food',
    },
	methods: {
        readRefs: function(){
            console.log(this.$refs);
            this.output = this.$refs.input.value;
        },
	},
	computed: {
		
	},
});