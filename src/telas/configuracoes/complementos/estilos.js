import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    backgroud:{
        flex: 1,            
    },
    caixaPrincipalTopo: {
        padding: 10,
        backgroundColor: '#00A8FF',
        borderColor: '#9400D3',
        borderWidth: 2,
        flexDirection: "row",
        alignItems: "center",
    },
    logo: {
        width: 50,
        height: 50,
    },
    titulo: {
        fontSize: 20,
        textAlign: "center",
        paddingHorizontal: 40,
        fontWeight: "bold",
        color: 'white',
    },
    caixaPricnipal: {
        justifyContent: "flex-start",
        alignItems: 'center',
        paddingVertical: 20,
    },
    tituloCaixaPrincipal: {
        paddingTop: 20,
        paddingHorizontal: 30,
        textAlign: "center",
        fontSize: 22,
        paddingVertical: 10,
        color: 'white',
        fontWeight: "bold",
    },
    detalhesCaixaPrincipal: {
        paddingHorizontal: 30,
        textAlign: "center",
        fontSize: 18,
        paddingBottom: 30,
        color: 'white',
    },
    textoBotao: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        color: '#FFF',
        width: 100,
    },
    textosRequisicao: {
        fontWeight: "bold",
        paddingLeft: 12,
        color: 'white',
    },
    input: {
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        justifyContent: "flex-start",
        backgroundColor: 'white',
    },
    caixaMultiline: {
        marginBottom: 20,
    },
    multilineInput: {
        textAlign: "justify",
        width: 300,
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
})
