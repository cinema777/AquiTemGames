import React, { useContext } from 'react';
import { View, ImageBackground, TouchableOpacity, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useTextos from '../../hooks/useTextos';
import { ProdutosContext } from '../../contexts/ProdutosContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';


import { estilos } from './componentes/estilos';
import { Produto } from '../../componentes/Produto';
import Topo from './componentes/topoJogos';

import Icon from "react-native-vector-icons/FontAwesome";
import backgroud from '../../assets/backgroud.png'


export default function Resumo () {
  const navigation = useNavigation();
  const { botaoVoltar } = useTextos();
  const { usuario } = useContext(AutenticacaoContext);
  const { 
    quantidade,
    carrinho
  } = useContext(ProdutosContext);

  return <View style={estilos.backgroud}>
    <ImageBackground source={backgroud} resizeMode="cover" style={estilos.backgroud}>
      <Topo />
      <View style={estilos.funcionalidades}>
        <TouchableOpacity style={estilos.botaoVoltar} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" color={'white'} size={25} />
          <Text style={estilos.textoVoltar}>{ botaoVoltar }</Text>
        </TouchableOpacity>
        <View style={estilos.carrinhoArea}>          
          <TouchableOpacity onPress={() => {}}>
            <Icon name="cart-plus" size={30} color="#fff" style={estilos.carrinhoIcon} />
          </TouchableOpacity>
          {quantidade > 0 && <View style={estilos.carrinhoQuantidadeArea}>
            <Text style={estilos.carrinhoQuantidade}>{quantidade}</Text>  
          </View>}
          <TouchableOpacity onPress={() => navigation.navigate('Fale conosco')} style={estilos.iconArea} >
            <Icon name="wechat" size={30} color="#fff" style={estilos.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={estilos.container}>
        <View style={estilos.tituloArea}>
          <Text style={estilos.boasVindas}>Ótimas escolhas {usuario.nome}, Clique em finalizar para avançar com sua compra!</Text>
        </View>
        <FlatList
          data={carrinho}
          keyExtractor={item => Math.random()}
          renderItem={({ item }) => <Produto item={item} adicionar={false} />}
          style={estilos.lista}
          showsVerticalScrollIndicator={false}
        />
        <TouchableOpacity style={estilos.botaoAvancar} onPress={() => navigation.navigate('Finalizar')} >
            <Text style={estilos.textoBotao}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>

    
}


