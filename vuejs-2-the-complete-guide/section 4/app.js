new Vue({
	el: "#app",
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		specialAttacks: 0,
		turns: []
	},
	methods: {
		startGame() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.specialAttacks = 3;
			this.turnNumber = 1;
			this.turns = [];
		},
		calculateDamage(min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		async nextTurn() {
			await this.checkWin().then(() => {
				this.npcTurn();
				this.turns.unshift({
					turnDone: true,
					turnNumber: this.turnNumber++
				});
			});
		},
		checkWin() {
			if (this.playerHealth <= 0) {
				this.playerHealth = 0;
				alert("You lost!");
				this.gameIsRunning = false;
				return null;
			} else if (this.monsterHealth <= 0) {
				console.log("Checking Monster Health");
				this.monsterHealth = 0;
				alert("You won!");
				this.gameIsRunning = false;
				return null;
			} else {
			}
			return new Promise(resolve => {
				resolve();
			});
		},
		attack() {
			let damage = this.calculateDamage(3, 10);
			this.monsterHealth -= damage;
			this.nextTurn();
			this.turns.unshift({
				isPlayer: true,
				text: "Player hit Monster for " + damage + "!"
			});
		},
		specialAttack() {
			if (this.specialAttacks > 0) {
				let damage = this.calculateDamage(10, 20);
				this.monsterHealth -= damage;
				this.specialAttacks -= 1;
				this.nextTurn();
				this.turns.unshift({
					isPlayer: true,
					text: "Player hits Monster hard for " + damage + "!"
				});
			} else {
				alert("No special attacks left!");
			}
		},
		heal() {
			if (this.playerHealth >= 90) {
				this.turns.unshift({
					isPlayer: true,
					text: "Player heals himself for " + (100 - this.playerHealth) + "!"
				});
				this.playerHealth = 100;
			} else {
				this.playerHealth += 10;
				this.turns.unshift({
					isPlayer: true,
					text: "Player heals himself for 10!"
				});
			}
			this.nextTurn();
		},
		surrender() {
			this.playerHealth = 0;
			this.checkWin();
		},
		npcTurn() {
			if ((this.gameIsRunning = true)) {
				let damage = this.calculateDamage(5, 12);
				this.playerHealth -= damage;
				this.checkWin();
				this.turns.unshift({
					isPlayer: false,
					text: "Monster hit Player for " + damage + "!"
				});
			} else {
			}
		}
	}
});
