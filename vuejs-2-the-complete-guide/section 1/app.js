new Vue({
  el: '#app',
  data: {
    title: 'Hello World!'
  },
  methods: {
    changeTitle(event) {
      this.title = event.target.value;
    }
  }
})