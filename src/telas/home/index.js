import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Text, ImageBackground } from 'react-native';
import { estilos } from './componentes/estilos';
import useTextos from '../../hooks/useTextos';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutosContext } from '../../contexts/ProdutosContext';

import Topo from './componentes/topo';

import Icon from 'react-native-vector-icons/FontAwesome';

import backgroud from '../../assets/backgroud.png'


export default function HomeScreen() {
  const navigation = useNavigation();
  const { busca, botaoSair } = useTextos();
  const { usuario } = useContext(AutenticacaoContext);
  const { quantidade } = useContext(ProdutosContext);

  return <View style={estilos.backgroud}>
    <ImageBackground source={backgroud} resizeMode="cover" style={estilos.backgroud}>
      <Topo />
      <View style={estilos.funcionalidades}>
        <TouchableOpacity style={estilos.botaoSair} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" color={'white'} size={25} />
          <Text style={estilos.textoSair}>{ botaoSair }</Text>
        </TouchableOpacity>
        <View style={estilos.carrinhoArea}>          
          <TouchableOpacity onPress={() => navigation.navigate('Resumo')}>
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
      <View style={estilos.caixaCabecario}>
        <Text style={estilos.boasVindas}>Olá, {usuario.nome}</Text>
      </View>
      <View style={estilos.caixaPrincipal}>        
        <TouchableOpacity >
          <Icon.Button name="search" backgroundColor={'#00A8FF'} size={50} margin={2} onPress={() => navigation.navigate('Jogos')}>
            <Text style={estilos.textoBotao}>{ busca }</Text>
          </Icon.Button>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
    
}
