import React, { useContext, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { estilos } from "./componentes/estilos";
import Topo from "./componentes/topoLogin";

import backgroud from '../../assets/backgroud.png';
import { AutenticacaoContext } from "../../contexts/AutenticacaoContext";


export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useContext(AutenticacaoContext);

  function logandoNoSistema(){
    const resultado = login(email, senha)
    if(resultado == 'ok'){
      navigation.navigate('HomeScreen');
    }else{
      Alert.alert(resultado);
    }
  }

  return (
    <View style={estilos.backgroud}>
      <ImageBackground source={backgroud} resizeMode="cover" style={estilos.backgroud}>
        <Topo />
        <View style={estilos.caixaPrincipal}>
          <Text style={estilos.tituloLogin}>Login</Text>
          <View style={estilos.inputArea}>
            <TextInput
              style={estilos.input}
              placeholder="Email"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={estilos.input}
              placeholder="Senha"
              autoCapitalize="none"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity
            style={estilos.botao}
            onPress={() => logandoNoSistema()}
          >
            <Text style={estilos.botaoTexto}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

