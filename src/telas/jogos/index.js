import React, { useContext } from 'react';
import { View, ImageBackground, TouchableOpacity, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useTextos from '../../hooks/useTextos';
import { ProdutosContext } from '../../contexts/ProdutosContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';

import { estilos } from './componentes/estilos';
import { produtos } from './componentes/produtos';
import { Produto } from '../../componentes/Produto';
import Topo from './componentes/topoJogos';

import Icon from "react-native-vector-icons/FontAwesome";
import backgroud from '../../assets/backgroud.png'


export default function Jogos () {
  const navigation = useNavigation();
  const { botaoVoltar } = useTextos();
  const { usuario } = useContext(AutenticacaoContext);
  const { 
    quantidade,
    ultimosVistos
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
      <View style={estilos.container}>
        <View style={estilos.tituloArea}>
          <Text style={estilos.boasVindas}>{usuario.nome}, esses são os jogos disponiveis no momento!</Text>
        </View>
        
        <FlatList
          data={produtos}
          keyExtractor={item => Math.random()}
          renderItem={({ item }) => <Produto item={item} adicionar={true} />}
          style={estilos.lista}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() =>
            <View>
              {ultimosVistos.length > 0 &&
                <View style={estilos.ultimosVistos}>
                  <Text style={estilos.tituloUltimosVistos}>Últimos vistos</Text>
                  <FlatList
                    data={ultimosVistos}
                    keyExtractor={item => Math.random()}
                    renderItem={({ item }) => <Produto item={item} adicionar={false} />}
                    style={estilos.lista}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />
                </View>}
              <Text style={[estilos.tituloPagina, { paddingLeft: 16 }]}>Jogos</Text>
            </View>
          }
        />
                 
      </View>
    </ImageBackground>
  </View>

    
}


