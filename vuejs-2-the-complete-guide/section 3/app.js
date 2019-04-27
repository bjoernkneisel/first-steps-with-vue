new Vue({
	el: "#app",
	data: {
		firstString: "Hello!"
	},
	computed: {
		iReturnAString() {
			return "hello";
		}
	}
});
