interface Veiculo  {
    modelo:string,
    anoFabricacao:number,
    quantidadePortas:number,
    marca:string
}


export class Carro implements Veiculo{
    modelo: string;
    anoFabricacao: number;
    quantidadePortas: 2 | 4;
    marca: string;
    constructor(modelo:string,anoFabricacao:number,quantidadePortas:2 | 4,marca:string){
        this.modelo=modelo;
        this.anoFabricacao=anoFabricacao;
        this.quantidadePortas = quantidadePortas;
        this.marca=marca;
    }

}

export class Moto implements Veiculo {
    modelo: string;
    anoFabricacao: number;
    quantidadePortas: number;
    marca: string;
    rodas: 2;
    passageiros: 1 | 2;

    constructor(modelo:string,anoFabricacao:number,quantidadePortas: number,marca: string,rodas: 2,passageiros: 1 | 2){
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
        this.quantidadePortas = quantidadePortas;
        this.marca = marca;
        this.rodas = rodas;
        this.passageiros= passageiros;
    }
}

export const createCarro = (modelo:string,anoFabricacao:number,quantidadePortas: 2 | 4,marca:string):Carro =>{
    let novoCarro = new Carro(modelo,anoFabricacao,quantidadePortas,marca);
    return novoCarro;
}

export const createMoto = (modelo:string,anoFabricacao:number,quantidadePortas:number,marca:string,rodas: 2,passageiros: 1 | 2 ):Moto =>{
    let novaMoto = new Moto(modelo,anoFabricacao,quantidadePortas,marca,rodas,passageiros);
    return novaMoto;
}

