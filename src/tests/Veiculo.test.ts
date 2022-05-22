import {createCarro,createMoto} from '../models/Veiculo';

describe('testing createCarro function',()=>{
    test('Verificar criação do objeto carro', () =>{
        expect(createCarro('teste',2021,4,'nissan')).toEqual({modelo:'teste',anoFabricacao:2021,quantidadePortas:4,marca:'nissan'});
    });


    test('Verificar criação do objeto moto',() =>{
        expect(createMoto('teste2',2025,0,'chevrolet',2,1)).toEqual({modelo:'teste2',anoFabricacao:2025,quantidadePortas:0,marca:'chevrolet',rodas:2,passageiros:1});
    })
});