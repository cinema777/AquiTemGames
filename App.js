import React from 'react';
import Rotas from './src/rotas/rotas';
import { AutenticacaoProvider } from './src/contexts/AutenticacaoContext';
import { ProdutosProvider } from './src/contexts/ProdutosContext';

export default function App() {
  return (
  <AutenticacaoProvider>
    <ProdutosProvider>
      <Rotas />
    </ProdutosProvider>
  </AutenticacaoProvider>
  )
}






