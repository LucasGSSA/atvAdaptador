interface Pato {
    grasnar(): void;
    voar(): void;
}

class PatoReal implements Pato {
    grasnar(): void {
        console.log("Quack! Quack!");
    }

    voar(): void {
        console.log("Voando como um pato real");
    }
}

interface Galinha {
    cacarejar(): void;
    voarCurto(): void;
}

class GalinhaReal implements Galinha {
    cacarejar(): void {
        console.log("Cocoricó!");
    }

    voarCurto(): void {
        console.log("Voando curto como uma galinha real");
    }
}

class AdaptadorPato implements Galinha {
    private pato: Pato;

    constructor(pato: Pato) {
        this.pato = pato;
    }

    cacarejar(): void {
        this.pato.grasnar();
    }

    voarCurto(): void {
        this.pato.voar();
    }
}

class AdaptadorPatoDemo {
    static demonstrar(): void {
        const patoReal: Pato = new PatoReal();
        const adaptadorPato: Galinha = new AdaptadorPato(patoReal);

        console.log("Pato real fazendo suas ações:");
        patoReal.grasnar();
        patoReal.voar();

        console.log("\nAdaptador de pato usado como uma galinha:");
        adaptadorPato.cacarejar();
        adaptadorPato.voarCurto();
    }
}

AdaptadorPatoDemo.demonstrar();
