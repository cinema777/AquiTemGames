import React, { createContext, useState } from "react";

export const AutenticacaoContext = createContext({});



export function AutenticacaoProvider( {children} ) {
    const [usuario, setUsuario] = useState({})

    function login (email, senha){
        if(email == '1' 
        && senha == 1){
            setUsuario({
                nome: 'Rodolfo',
                sobrenome: "Felis",
                email: 'rodolfo@email.com',
                endereco: 'Av. Paulista, n77',
                telefone: '(19) 98888-7777'
            })
            return 'ok'
        } else {
            return 'Email ou senha incorretos';
        }
    }

    return (
        <AutenticacaoContext.Provider value={{
            usuario,
            login,
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}