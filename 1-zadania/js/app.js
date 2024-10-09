const rectangle = {
    height: 5,
    width: 10,
    showArea() {
        return this.height * this.width;
    }
};

const circle = {
    radius: 7,
    showArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log("Zadanie 1:");
console.log(`Kwadrat ma szerokość ${rectangle.width} i wysokość ${rectangle.height}`);
console.log(`Jego pole to ${rectangle.showArea()}`);
console.log(`Koło ma promień ${circle.radius}`);
console.log(`Jego pole to ${circle.showArea()}`);

const currentUser = {
    name: 'Konrad',
    surname: 'Szczypiór',
    email: 'Konrad@zsegw.com',
    www: 'www.Szczypiórek.com',
    userType: 'admin',
    isActive: true,
    show() {
        console.log(this);
    },
    setActive(active) {
        this.isActive = active;
    }
};

console.log("Zadanie 2:");
currentUser.show();
currentUser.setActive(false);
console.log(`Active status: ${currentUser.isActive}`);

const book = {
    title: 'Wiedźmin',
    author: 'Andrzej Sapkowski',
    pageCount: 320,
    publisher: 'SuperNowa',
    showDetails() {
        console.log("Using for...in:");
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
        console.log("Using Object.keys():");
        Object.keys(this).forEach(key => console.log(`${key}: ${this[key]}`));
        console.log("Using Object.values():");
        console.log(Object.values(this));
        console.log("Using Object.entries():");
        console.log(Object.entries(this));
    }
};

console.log("Zadanie 3:");
book.showDetails();

const spaceShip = {
    name: 'Enterprise',
    currentLocation: 'Earth',
    flyDistance: 0,
    flyTo(place, distance) {
        this.currentLocation = place;
        this.flyDistance += distance;
    },
    showInfo() {
        console.log(`Informacje o statku:\n----\nStatek ${this.name}\ndoleciał do miejsca ${this.currentLocation}\nStatek przeleciał już całkowity dystans ${this.flyDistance}`);
    },
    meetClingon() {
        let victories = 0;
        for (let i = 0; i < 100; i++) {
            if (Math.random() > 0.5) victories++;
        }
        if (victories >= 50) {
            console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`);
        } else {
            console.warn(`Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów`);
        }
    }
};

console.log("Zadanie 4:");
spaceShip.flyTo('Mars', 500);
spaceShip.showInfo();
spaceShip.meetClingon();

const bookWithUsers = {
    users: [],
    addUser(name, age, phone) {
        this.users.push({ name, age, phone });
    },
    showUsers() {
        console.log('Wszyscy użytkownicy w książce:');
        this.users.forEach(user => console.log(user));
    },
    findByName(name) {
        const user = this.users.find(user => user.name === name);
        console.log(user || false);
    },
    findByPhone(phone) {
        const user = this.users.find(user => user.phone === phone);
        console.log(user || false);
    },
    getCount() {
        console.log(`Liczba użytkowników: ${this.users.length}`);
    }
};

console.log("Zadanie 5:");
bookWithUsers.addUser('Alice', 30, '123456789');
bookWithUsers.addUser('Bob', 25, '987654321');
bookWithUsers.showUsers();
bookWithUsers.findByName('Alice');
bookWithUsers.findByPhone('123456789');
bookWithUsers.getCount();

const tableGenerator = {
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    generateIncTable(nr) {
        return Array.from({ length: nr + 1 }, (_, i) => i);
    },
    generateRandomTable(lng, min, max) {
        return Array.from({ length: lng }, () => this.randomNumber(min, max));
    },
    generateTableFromText(str) {
        return typeof str === 'string' ? str.split(' ') : [];
    },
    getMaxFromTable(arr) {
        return Math.max(...arr);
    },
    getMinFromTable(arr) {
        return Math.min(...arr);
    },
    delete(arr, index) {
        arr.splice(index, 1);
        return arr;
    }
};

console.log("Zadanie 6:");
console.log(tableGenerator.randomNumber(1, 10));
console.log(tableGenerator.generateIncTable(5));
console.log(tableGenerator.generateRandomTable(5, 1, 10));
console.log(tableGenerator.generateTableFromText("Hello world from JavaScript"));
console.log(tableGenerator.getMaxFromTable([1, 2, 3, 10, 5]));
console.log(tableGenerator.getMinFromTable([1, 2, 3, 10, 5]));
console.log(tableGenerator.delete([1, 2, 3], 1));

const text = {
    check(txt, word) {
        return txt.includes(word);
    },
    getCount(txt) {
        return txt.length;
    },
    getWordsCount(txt) {
        return txt.split(' ').length;
    },
    setCapitalize(txt) {
        return txt.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    },
    setMix(txt) {
        return txt.split('').map((char, i) => (i % 2 === 0 ? char.toLowerCase() : char.toUpperCase())).join('');
    },
    generateRandom(lng) {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        return Array.from({ length: lng }, () => letters[Math.floor(Math.random() * letters.length)]).join('');
    }
};

console.log("Zadanie 7:");
console.log(text.check("ala ma kota", "kota"));
console.log(text.getCount("ala ma kota"));
console.log(text.getWordsCount("Ala ma kota"));
console.log(text.setCapitalize("ala ma kota"));
console.log(text.setMix("ala ma kota"));
console.log(text.generateRandom(10));