
interface CriaturasFantasticas {
    attack(): void;
}

interface FabricaDeCriaturas {
    criarCriaturaForte(): CriaturasFantasticas;
    criarCriaturaVeloz(): CriaturasFantasticas;
}

class Dragao implements CriaturasFantasticas {
    attack(): void {
        console.log("O dragão solta uma baforada de fogo!");
    }
}

class Salamandra implements CriaturasFantasticas {
    attack(): void {
        console.log("A salamandra corre rapidamente e lança uma chama!");
    }
}

class SerpenteMarinha implements CriaturasFantasticas {
    attack(): void {
        console.log("A serpente marinha ataca com uma mordida venenosa!");
    }
}

class Tritao implements CriaturasFantasticas {
    attack(): void {
        console.log("O tritão nada rapidamente e ataca com sua lança!");
    }
}

class FabricaReinoFogo implements FabricaDeCriaturas {
    criarCriaturaForte(): CriaturasFantasticas {
        return new Dragao();
    }

    criarCriaturaVeloz(): CriaturasFantasticas {
        return new Salamandra();
    }
}

class FabricaReinoAgua implements FabricaDeCriaturas {
    criarCriaturaForte(): CriaturasFantasticas {
        return new SerpenteMarinha();
    }

    criarCriaturaVeloz(): CriaturasFantasticas {
        return new Tritao();
    }
}

function testarCriaturas(fabrica: FabricaDeCriaturas) {
    const criaturaForte = fabrica.criarCriaturaForte();
    const criaturaVeloz = fabrica.criarCriaturaVeloz();

    criaturaForte.attack();
    criaturaVeloz.attack();
}

const fabricaFogo = new FabricaReinoFogo();
const fabricaAgua = new FabricaReinoAgua();

console.log("Testando Fábrica do Reino do Fogo:");
testarCriaturas(fabricaFogo);

console.log("\nTestando Fábrica do Reino da Água:");
testarCriaturas(fabricaAgua);
