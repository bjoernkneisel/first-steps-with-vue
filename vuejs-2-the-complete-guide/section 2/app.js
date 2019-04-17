new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: 'http://google.com',
    code1: '<h1 v-once>{{ title }}</h1>',
    name: 'Björn',
    age: '22',
    imgurl: 'https://avatars1.githubusercontent.com/u/36930665?s=460&v=4',
    counter: 0,
    x: 0,
    y: 0,
    value: '{{ value }}',
    secondCounter: 0,
    newValue: 0,
    attachRed: false,
    attachGreen: false,
    attachBlue: false,
    color: 'green',
    effectClass: '',
    float: 'float',
    userClass: '',
    isFloating: false,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'orange'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'orange',
      'text-align': 'center'
    },
    width: 0,
  },
  methods: {
    sayHello() {
      return this.title;
    },
    increase() {
      this.counter = this.counter + 1;
    },
    changeTitle(event) {
      this.title = event.target.value;
    },
    randomFloat() {
      return Math.random();
    },
    updateCoordinates(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe() {
      alert('Alert!');
    },
    result() {
      console.log('result()');
      return this.counter > 5 ? 'Counter > 5' : 'Counter < 5';
    },
    startEffect() {
      const style1 = 'highlight';
      const style2 = 'shrink';
      this.effectClass = style1;
      setInterval(()=> {
        if (this.effectClass === style1) {
          this.effectClass = style2;
        } else {
          this.effectClass = style1;
        }
      }, 500);
    },
    startProgress() {
      setInterval(()=> {
        if (this.width <= 790) {
          this.width = this.width + 10;
          this.progressBar.width = this.width + 'px';
        } else {
          return;
        }
      }, 35);
    }
  },
  computed: {
    output() {
      console.log('output()');
      return this.counter > 5 ? 'Counter > 5' : 'Counter < 5';
    },
    newResult() {
      return this.newValue === 37 ? 'Done' : 'Not there yet';
    },
    divClasses() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    }
  },
  watch: {
    counter() {
      if (this.counter === 10) {
        this.counter = 0;
        alert('Resetting counter!');
      }
    },
    newResult() {
      const vm = this;
      setTimeout( ()=> {
        vm.newValue = 0;
      }, 5000);
    }
  }
});