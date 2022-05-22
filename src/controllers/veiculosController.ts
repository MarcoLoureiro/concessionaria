import { createCarro,createMoto } from "../models/Veiculo";
import { Request,Response } from "express";


export const home = (req:Request,res:Response) =>{
    let veiculo = req.params.veiculo;
    if(veiculo=='moto'){
        res.render('pages/carro');
    }else
    if(veiculo=='carro'){
        res.render('pages/moto');
    }else{
    res.render('pages/home',{
        veiculo
    });
    }
}

export const formCarro = (req:Request,res:Response) =>{
    res.render('pages/carro');
}

export const postCarro = (req:Request,res:Response) =>{
    let {modelo,anoFabricacao,quantidadePortas,marca} = req.body;

    let novoCarro = createCarro(modelo,anoFabricacao,quantidadePortas,marca);
    res.json({carro:novoCarro});
}

export const formMoto = (req:Request,res:Response) =>{
    res.render('pages/moto');
}

export const postMoto = (req:Request,res:Response) =>{
    let {modelo,anoFabricacao,marca,passageiros} = req.body;

    let novaMoto = createMoto(modelo,anoFabricacao,0,marca,2,passageiros);

    res.json({moto:novaMoto});
}

