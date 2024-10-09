class User {
    constructor(nick, name, surname, email, role) {
        this.nick = nick;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.loginDates = [];
        this.active = true;
    }

    logIn() {
        const date = new Intl.DateTimeFormat('pl-PL', { 
            dateStyle: 'full', 
            timeStyle: 'long' 
        }).format(new Date());
        this.loginDates.push(date);
    }

    showLoginDates() {
        this.loginDates.forEach(date => console.log(date));
    }

    showDetails() {
        for (let key in this) {
            console.log(`${key}: ${this[key]}`);
        }
    }

    toggleActive() {
        this.active = !this.active;
    }
}

const users = [
    new User('nick1', 'Marcin', 'Blatkiewicz', 'Marcin@zsegw.com', 'Admin'),
    new User('nick2', 'Anna', 'Mazur', 'Anna@zsegw.com', 'Edytor'),
    new User('nick3', 'Piotr', 'Winiarski', 'Piotr@zsegw.com', 'Krążek')
];

console.log("Zadanie 1:");
users[0].logIn();
users[0].showLoginDates();
users[0].showDetails();
users[0].toggleActive();
console.log(`Status active: ${users[0].active}`);

console.log("Zadanie 2:");
class Fighter {
    constructor(name, life = 20, power = 3) {
        this.name = name;
        this.life = life;
        this.power = power;
    }

    attack(who) {
        if (Math.random() < 0.5) {
            who.life -= this.power;
            log.push(`${this.name} zaatakował ${who.name}. ${who.name} ma teraz ${who.life} punktów życia.`);
        } else {
            log.push(`${this.name} chybił w ataku na ${who.name}.`);
        }
    }
}

const names = [ "Bahm Bench", "K'sante", "Katarina", "Axe", "Lee sin", "Evellyn", "Lux", "shen", "Renekton", "Thresh", "Neeko", "Anivia"];
const fighters = [];
const log = [];

names.forEach(name => fighters.push(new Fighter(name)));

function getFighter() {
    if (fighters.length > 0) {
        const index = Math.floor(Math.random() * fighters.length);
        return fighters[index];
    }
    return null;
}

let leftFighter = null;
let rightFighter = null;

function loop() {
    if (!leftFighter) leftFighter = getFighter();
    if (!rightFighter) rightFighter = getFighter();

    if (leftFighter && rightFighter) {
        if (Math.random() < 0.5) {
            leftFighter.attack(rightFighter);
        } else {
            rightFighter.attack(leftFighter);
        }

        if (leftFighter.life <= 0) {
            log.push(`${leftFighter.name} został pokonany!`);
            fighters.splice(fighters.indexOf(leftFighter), 1);
            leftFighter = null;
            rightFighter.life = 20;
        }

        if (rightFighter.life <= 0) {
            log.push(`${rightFighter.name} został pokonany!`);
            fighters.splice(fighters.indexOf(rightFighter), 1);
            rightFighter = null;
            leftFighter.life = 20;
        }

        if (fighters.length === 0) {
            log.push("Turniej zakończony. Zwycięzca został wyłoniony.");
            console.log(log.join('\n'));
            return false;
        }
    }

    console.clear();
    console.log("Zadanie 2:");
    console.log(log.join('\n'));

    setTimeout(() => loop(), 100);
}

loop();

console.log("Zadanie 3:");
String.prototype.sortText = function(char) {
    return this.split(char).sort().join(char);
};
console.log("Marcin-Ania-Piotrek-Konrad".sortText('-'));

console.log("Zadanie 4:");
String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};
console.log("Ala ma kota".reverse());

console.log("Zadanie 5:");
Array.prototype.sum = function() {
    return this.reduce((acc, curr) => acc + curr, 0);
};

Array.prototype.sortNr = function() {
    return this.sort((a, b) => a - b);
};

console.log([1, 2, 3].sum());
console.log([1, 1.2, 11, 22, 2.1].sortNr());
