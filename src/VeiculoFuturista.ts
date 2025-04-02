//Interfaces

interface Veiculo {
    descricao(): void;
}

interface Propulsao {
    tipo(): void;
}

interface SistemaDeControle {
    tipo(): void;
}

interface FabricaDeVeiculos {
    criarPropulsao(): Propulsao;
    criarSistemaDeControle(): SistemaDeControle;
}


//Veiculos

class PropulsaoCarroVoador implements Propulsao {
    tipo(): void {
        console.log("Propulsão: Motor a Jato");
    }
}

class ControleCarroVoador implements SistemaDeControle {
    tipo(): void {
        console.log("Sistema de Controle: Inteligência Artificial");
    }
}

class PropulsaoMotoAutonoma implements Propulsao {
    tipo(): void {
        console.log("Propulsão: Motor Elétrico");
    }
}

class ControleMotoAutonoma implements SistemaDeControle {
    tipo(): void {
        console.log("Sistema de Controle: Controle Manual");
    }
}

class PropulsaoNaveEspacial implements Propulsao {
    tipo(): void {
        console.log("Propulsão: Motor a Plasma");
    }
}

class ControleNaveEspacial implements SistemaDeControle {
    tipo(): void {
        console.log("Sistema de Controle: Inteligência Artificial");
    }
}

class PropulsaoExploradorRobotico implements Propulsao {
    tipo(): void {
        console.log("Propulsão: Propulsão Iônica");
    }
}

class ControleExploradorRobotico implements SistemaDeControle {
    tipo(): void {
        console.log("Sistema de Controle: Controle Manual");
    }
}


//Fabricas 

class FabricaVeiculosTerra implements FabricaDeVeiculos {
    criarPropulsao(): Propulsao {
        return new PropulsaoCarroVoador();
    }

    criarSistemaDeControle(): SistemaDeControle {
        return new ControleCarroVoador();
    }
}

class FabricaVeiculosEspaco implements FabricaDeVeiculos {
    criarPropulsao(): Propulsao {
        return new PropulsaoNaveEspacial();
    }

    criarSistemaDeControle(): SistemaDeControle {
        return new ControleNaveEspacial();
    }
}


//Configurações

function configurarVeiculo(fabrica: FabricaDeVeiculos) {
    const propulsao = fabrica.criarPropulsao();
    const sistemaDeControle = fabrica.criarSistemaDeControle();

    propulsao.tipo();
    sistemaDeControle.tipo();
}

const fabricaTerra = new FabricaVeiculosTerra();
const fabricaEspaco = new FabricaVeiculosEspaco();

console.log("Configurando veículo para Terra:");
configurarVeiculo(fabricaTerra);

console.log("\nConfigurando veículo para Espaço:");
configurarVeiculo(fabricaEspaco);
