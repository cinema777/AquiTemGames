import React, { createContext, useEffect, useState } from "react";
import { limparCesta, pegarProdutos, salvarProduto } from "../servicos/requisicoes/produtos";

export const ProdutosContext = createContext({});

export function ProdutosProvider( {children} ) {
    const [quantidade, setQuantidade] = useState(0);
    const [carrinho, setCarrinho] = useState([]);
    const [ultimosVistos, setUltimosVistos] = useState([]);
    const [precoTotal, setPrecoTotal] = useState(0);

    useEffect(() => {
        async function esperar(){
            const resultado = await pegarProdutos();
            if(resultado > 0){
                setCarrinho(resultado);
                setQuantidade(resultado.length);
            }
        }
        esperar();
    }, []);

    async function viuProduto(produto){
        const resultado = await salvarProduto(produto);
        const novoItemCarrinho = [...carrinho, resultado];
        setCarrinho(novoItemCarrinho);

        let novoUltimosVistos = new Set(ultimosVistos);
        novoUltimosVistos.add(produto);
        setUltimosVistos([...novoUltimosVistos]);

        setQuantidade(quantidade + 1);
        let novoPrecoTotal = precoTotal + produto.preco;
        setPrecoTotal(novoPrecoTotal);
    }

    async function compraFinalizada(){
        try{
            carrinho.forEach(async produto => {
                await limparCesta(produto);
            })
            setCarrinho([]);
            setQuantidade(0);
            setPrecoTotal(0);
            return 'Compra Finalizada com sucesso';
        }
        catch(erro){
            return 'Erro ao finalizar a compra, tente novamente!';

        }
    }

    return (
        <ProdutosContext.Provider value={{
            quantidade,
            carrinho,
            ultimosVistos,
            viuProduto,
            compraFinalizada,
            precoTotal,
        }}>
            {children}
        </ProdutosContext.Provider>
    )
}