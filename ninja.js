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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();