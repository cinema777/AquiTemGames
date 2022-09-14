import { pegarProdutos } from "../../../src/servicos/requisicoes/produtos";
import api from '../../../src/servicos/api';

jest.mock('../../../src/servicos/api');

const mockProdutos = [
    {
        id: 1,
        nome: 'Produto',
        descricao: 'descrição do Produto',
        preco: 100
    }
];

const mockRequisicao = (retorno) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: retorno
            });
        }, 200);
    });
};

const mockRequisicaoErro = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject();
        }, 200);
    });
};


describe('servicos/requisicoes/produtos', () => {
    
    describe('pegarProdutos', () => {

        it('deve retornar uma lista de produtos', async () => {
            api.get.mockImplementation(() => mockRequisicao(mockProdutos));
            const produtos = await pegarProdutos();
            expect(produtos).toEqual(mockProdutos);
        })
    
        it('deve retornar uma lista vazia quando a requisição falhar', async () => {
            api.get.mockImplementation(() => mockRequisicaoErro());
            const produtos = await pegarProdutos();
            expect(produtos).toEqual([]);
        })
    })

})
