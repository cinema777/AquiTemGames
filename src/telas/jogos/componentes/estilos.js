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
    marginBottom: 16,
    fontSize: 20,
    textAlign: "center",
    color: 'white',
    paddingTop: 10,
  },
  lista:{
    flex: 1,
    width: '100%',
  },
  ultimosVistos:{
    marginBottom: 16,
    paddingVertical: 16,
  },
  tituloUltimosVistos:{
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  tituloPagina:{
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 40,
    fontWeight: "bold",
    color: 'white',
    fontWeight: 'bold',
  },   
})
