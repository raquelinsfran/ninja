class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 100; // Valor predeterminado de salud
        this.velocidad = 3; // Valor predeterminado de velocidad
        this.fuerza = 3; // Valor predeterminado de fuerza
    }

    sayName() {
        console.log(`Mi nombre es ${this.nombre}`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`${this.nombre} bebió sake y ganó 10 puntos de salud. Salud actual: ${this.salud}`);
    }
}
class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre);
        this.salud = 200;
        this.fuerza = 10;
        this.velocidad = 10;
        this.sabiduria = 10;
    }

    speakWisdom = () => {
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const splinter = new Sensei("Splinter");
splinter.sayName();
splinter.showStats();
splinter.drinkSake();
splinter.speakWisdom();
