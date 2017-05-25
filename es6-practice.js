class Fighter {
	constructor(name = 'John Doe', power = 10, health = 100) {
		this.name = name;
		this.power = power;
		this.health = health;
	}
	setDamage(damage) {
		this.health -= damage;
		if (this.health <= 0) {
			console.log(`${this.name} is dead!`);
		} else {
			console.log(`${this.name} health: ${this.health}`);
		}
	}
	hit(enemy, point) {
		// Point - параметр принятный в функцию figth
		const damage = point * this.power;
		enemy.setDamage(damage);
	}
}

class improvedFighter extends Fighter {
	doubleHit(enemy, point) {
		super.hit(enemy, point * 2);
	}
}

const figth = (fighter, improvedFighter, ...point) => {
	// If we have more than 3 parameters
	if (typeof point === 'object') {
		// We need only third one
		point = point[0];
	}
	while (true) {
		// Figther makes his hit
		fighter.hit(improvedFighter, point);
		// Checking health of impovedFighter
		if (improvedFighter.health <= 0) {
			console.log(`${fighter.name} wins!`);
			break;
		}
		// Improved Fighter makes his hit
		improvedFighter.hit(fighter, point);
		// Checking fighters health
		if (fighter.helath <= 0) {
			console.log(`${improvedFighter.name} wins!`);
			break;
		}
	}
};

const sam = new Fighter('Sam');
const tony = new improvedFighter('Tony');
figth(sam, tony, 3);
