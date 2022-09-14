import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    backgroud:{
        flex: 1,
        justifyContent: "center"
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
    botaoSair:{
        flexDirection: 'row',
        marginLeft: 10,
        marginVertical: 5,
        width: '30%',
    },
    textoSair:{
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
    caixaCabecario:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    boasVindas:{
        width: '50%',
        fontSize: 25,
        textAlign: "center",
        color: 'white',
        fontWeight: "bold",
    },
    botaoAvancar:{
        width: '20%',
        flexDirection: 'row',
        marginRight: 10,
        marginVertical: 5,
    },  
    caixaPrincipal: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },    
    textoBotao: {
        fontFamily: 'Arial',
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        margin: 8,
    },
})
