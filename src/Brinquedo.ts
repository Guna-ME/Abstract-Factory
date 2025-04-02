interface Brinquedo {
    play(): void;
}

interface FabricaDeBrinquedos {
    criarCarrinho(): Brinquedo;
    criarBoneca(): Brinquedo;
}

class CarrinhoPlastico implements Brinquedo {
    play(): void {
        console.log("Brincando com o carrinho de plástico!");
    }
}

class BonecaPlastico implements Brinquedo {
    play(): void {
        console.log("Brincando com a boneca de plástico!");
    }
}

class CarrinhoMadeira implements Brinquedo {
    play(): void {
        console.log("Brincando com o carrinho de madeira!");
    }
}

class BonecaMadeira implements Brinquedo {
    play(): void {
        console.log("Brincando com a boneca de madeira!");
    }
}

class FabricaPlastico implements FabricaDeBrinquedos {
    criarCarrinho(): Brinquedo {
        return new CarrinhoPlastico();
    }

    criarBoneca(): Brinquedo {
        return new BonecaPlastico();
    }
}

class FabricaMadeira implements FabricaDeBrinquedos {
    criarCarrinho(): Brinquedo {
        return new CarrinhoMadeira();
    }

    criarBoneca(): Brinquedo {
        return new BonecaMadeira();
    }
}

function testarFabrica(fabrica: FabricaDeBrinquedos) {
    const carrinho = fabrica.criarCarrinho();
    const boneca = fabrica.criarBoneca();

    carrinho.play();
    boneca.play();
}

console.log("Fábrica de Plástico:");
const fabricaPlastico = new FabricaPlastico();
testarFabrica(fabricaPlastico);

console.log("Fábrica de Madeira:");
const fabricaMadeira = new FabricaMadeira();
testarFabrica(fabricaMadeira);
