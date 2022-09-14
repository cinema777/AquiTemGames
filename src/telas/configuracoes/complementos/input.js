import React, { useState } from "react";
import { SafeAreaView, TextInput, View, Text } from "react-native";
import { estilos } from './estilos';
import useTextos from '../../../hooks/useTextos';

export default function CampoDeTexto () {
  const [nomeCliente, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");
  const [email, onChangeEmail] = useState("");
  const [mensagem, onChangeMensagem] = useState("");
  const {
    nomeCompleto,
    seuTelefone,
    seuEmail,
    suaMensagem,
    holderNome,
    holdertelefone,
    holderEmail,
    holderMensagem,


  } = useTextos();

  return <SafeAreaView>
    <Text style={estilos.textosRequisicao}>{ nomeCompleto }</Text>
    <TextInput
      style={estilos.input}
      onChangeText={onChangeText}
      value={nomeCliente}
      placeholder={ holderNome }
      
    />
    <Text style={estilos.textosRequisicao}>{ seuTelefone }</Text>
    <TextInput
      style={estilos.input}
      onChangeText={onChangeNumber}
      value={number}
      placeholder={ holdertelefone }
      keyboardType="number"
    />
    <Text style={estilos.textosRequisicao}>{ seuEmail }</Text>
    <TextInput
      style={estilos.input}
      onChangeText={onChangeEmail}
      value={email}
      placeholder={ holderEmail }
      keyboardType="email"
    />
    <Text style={estilos.textosRequisicao}>{ suaMensagem }</Text>
    <View style={estilos.caixaMultiline}>
      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={onChangeMensagem}
        placeholder={ holderMensagem }
        value={mensagem}
        style={estilos.multilineInput}
      />
    </View>
  </SafeAreaView>
  
};
