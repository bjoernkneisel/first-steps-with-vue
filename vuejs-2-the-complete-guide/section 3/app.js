new Vue({
	el: "#app",
	data: {
		show: true,
		ingredients: ["meat", "fruit", "cookies"],
		persons: [
			{ name: "Jimmy", age: 22, haircolor: "blonde" },
			{ name: "Sebastian", age: 21, haircolor: "darkbrown" },
			{ name: "Micheal", age: 22, haircolor: "brown" }
		],
		code1: '<li v-for="(ingredient, i) in ingredients">',
		code2: "{{ i + 1 }}: {{ ingredient }}",
		code3: '<li v-for="(ingredient, i) in ingredients">'
	}
});
