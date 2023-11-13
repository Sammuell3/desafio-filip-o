// Modelo de herói
class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attack;
        if (this.type === "Mago") {
            attack = "usando magia";
        } else if (this.type === "Guerreiro") {
            attack = "usando espada";
        } else if (this.type === "Monge") {
            attack = "usando artes marciais";
        } else if (this.type === "Ninja") {
            attack = "usando shuriken";
        }
        console.log(`O ${this.type} ${this.name} atacou ${attack}`);
    }
}

// Criando instâncias de heróis
const heroiMago= new Hero("Salatiel", 19, "Mago");
const heroiGerreiro = new Hero("Samuel", 21, "Guerreiro");
const heroiMonge = new Hero("Will", 21, "Monge");
const heroiNinja = new Hero("Maelle", 19, "Ninja");

// Chamando o método attack para cada herói
heroiMago.attack();
heroiGerreiro.attack();
heroiMonge.attack();
heroiNinja.attack();
