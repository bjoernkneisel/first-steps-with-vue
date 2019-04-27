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
		carmakes: ["BMW", "VW", "Opel", "Fiat", "Porsche", "Mercedes"],
		bookseries: [{ title: "Lord of the Rings", author: "J.R.R. Tolkiens", books: "3" }],
		dataArray: {
			name: "TESTOBJECT",
			id: 10,
			data: [1.67, 1.33, 0.98, 2.21]
		},
		code1: '<li v-for="(ingredient, i) in ingredients">',
		code2: "{{ i + 1 }}: {{ ingredient }}",
		code3: '<li v-for="(ingredient, i) in ingredients">'
	}
});
