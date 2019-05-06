import Vue from "vue";
import App from "./App.vue";

new Vue({
  el: "#app",
  // renders the .vue file / App.vue is our template
  render: h => h(App),
  data: {
    msg: "Hello World!"
  }
});
