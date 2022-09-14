import React, { useContext } from 'react';
import { View, ImageBackground, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useTextos from '../../hooks/useTextos';
import { ProdutosContext } from '../../contexts/ProdutosContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';



import { estilos } from './componentes/estilos';
import Topo from './componentes/topoJogos';

import Icon from "react-native-vector-icons/FontAwesome";
import backgroud from '../../assets/backgroud.png'


export default function Finalizar () {
  const navigation = useNavigation();
  const { botaoVoltar } = useTextos();
  const { usuario } = useContext(AutenticacaoContext);
  const { 
    quantidade,
    precoTotal,
    compraFinalizada,
  } = useContext(ProdutosContext);

  async function finalizar(){
    const resultado = await compraFinalizada();
    Alert.alert(resultado);
    navigation.navigate('HomeScreen');
  }

  return <View style={estilos.backgroud}>
    <ImageBackground source={backgroud} resizeMode="cover" style={estilos.backgroud}>
      <Topo />
      <View style={estilos.funcionalidades}>
        <TouchableOpacity style={estilos.botaoVoltar} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" color={'white'} size={25} />
          <Text style={estilos.textoVoltar}>{ botaoVoltar }</Text>
        </TouchableOpacity>
        <View style={estilos.carrinhoArea}>          
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
      <Text style={estilos.tituloArea}>Confira Seus dados:</Text>
      <View style={estilos.cartao}>
        <Text style={estilos.textoCartao}>Nome: {usuario.nome} {usuario.sobrenome}</Text>
        <Text style={estilos.textoCartao}>Endereço: {usuario.endereco}</Text>
        <Text style={estilos.textoCartao}>Telefone: {usuario.telefone}</Text>
        <Text style={estilos.textoCartao}>Email: {usuario.email}</Text>
      </View>
      <Text style={estilos.tituloArea}>Seu Pedido:</Text>
      <View style={estilos.cartao}>
        <Text style={estilos.textoCartao}>Jogos: {quantidade} </Text>
        <Text style={estilos.textoCartao}>Preço Total: R$ {precoTotal}</Text>
      </View>
      <View style={estilos.container}>
        <TouchableOpacity style={estilos.botaoAvancar} onPress={() => finalizar()} >
          <Text style={estilos.textoBotao}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>

    
}


