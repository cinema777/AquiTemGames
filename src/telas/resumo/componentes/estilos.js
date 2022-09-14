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
  funcionalidades:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botaoVoltar:{
    flexDirection: 'row',
    marginLeft: 10,
    marginVertical: 5,
    width: '30%',
  },
  textoVoltar:{
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  carrinhoArea:{
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 16,
  },
  carrinhoIcon:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  carrinhoQuantidadeArea:{
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carrinhoQuantidade:{
    fontSize: 12,
    fontWeight: 'bold',
    color: "#fff",
  },
  iconArea:{
    marginLeft: 16,
  },  
  icon:{
    fontSize: 30,
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  tituloArea:{
    width: '100%',
    alignItems: 'center',
    justifyContent: "space-around",
    marginBottom: 20,
    textAlign: "center",
  },
  boasVindas:{
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
    color: 'white',
    paddingTop: 10,
  },
  lista:{
    flex: 1,
    width: '100%',
  },
  botaoAvancar:{
    backgroundColor: '#008000',
    width: '90%',
    margin: 2, 
    marginTop: 12,
    alignItems: "center",
    height: '10%',
    borderRadius: 10,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textoBotao:{
    fontFamily: 'Arial',
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    margin: 8,
  },    
})
