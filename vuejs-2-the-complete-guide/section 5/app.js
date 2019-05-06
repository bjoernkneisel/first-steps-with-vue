new Vue({
	el: "#app",
	beforeCreate() {
		console.log("beforeCreate()");
	},
	created() {
		console.log("created()");
	},
	beforeMount() {
		console.log("About to be mounted");
	},
	mounted() {
		console.log("Now mounted to the DOM");
	},
	beforeDestroy() {
		console.log("Vue Instance about to be destroyed!");
	},
	destroyed() {
		console.log("Vue Instance destroyed");
	},
	data: {
		title: "Change me"
	},
	methods: {
		iAmJustARegularMethod() {
			console.log("Hello");
		},
		destroyVue() {
			this.$destroy();
		}
	}
});
