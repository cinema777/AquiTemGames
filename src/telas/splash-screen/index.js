import React, { useEffect } from "react";
import { View} from "react-native";
import LottieView from "lottie-react-native";
import estilos from "./estilos";
import splash from "../../assets/splash.json";

export default function SplashScreen({navigation}){
    useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } })
    }, [])
    function animacaoFinalizada(){
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })
        navigation.getParent().setOptions({ tabBarStyle: { display: 'flex', paddingBottom: 5,
        height: 50, } })
    }

    return (
        <View style={estilos.container}>
            <LottieView 
                source={splash}
                loop={false}
                autoPlay={true}
                onAnimationFinish={animacaoFinalizada}
            />
        </View>       
    )
}
