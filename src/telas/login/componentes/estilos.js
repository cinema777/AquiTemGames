import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  backgroud:{
    flex: 1,
  },
  caixaPrincipalTopo:{
    padding: 10,
    backgroundColor: '#00A8FF',
    borderColor: '#9400D3',
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  logo:{
    width: 50,
    height: 50,
  },
  titulo:{
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 40,
    fontWeight: "bold",
    color: 'white',
  },
  caixaPrincipal:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  tituloLogin: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputArea: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: '85%',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    fontSize: 20,
  },
  botao: {
    height: 50,
    width: 120,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: '#00A8FF',
  },
  botaoTexto: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    fontWeight: "bold",
  },
});
