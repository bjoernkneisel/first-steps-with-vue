import Vue from "vue";
import App from "./App.vue";
import Home from "./Home.vue";

Vue.component("app-servers", Home);

new Vue({
  el: "#app",
  // renders the .vue file / App.vue is our template
  render: h => h(App)
});

Vue.component("bk-cmp", {
  template: "<p>Server Status: {{ status }}</p>"
});
