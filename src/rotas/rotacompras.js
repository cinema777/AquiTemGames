import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../telas/login';
import Jogos from '../telas/jogos';
import Resumo from '../telas/resumo';
import Finalizar from '../telas/finalizar';
import SplashScreen from '../telas/splash-screen';
import HomeScreen from '../telas/home'

const Stack = createNativeStackNavigator();

export default function RotadeCompras() {
    return <Stack.Navigator screenOptions={{ headerShown: false}}  >
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='Jogos' component={Jogos} />
            <Stack.Screen name='Resumo' component={Resumo} />
            <Stack.Screen name='Finalizar' component={Finalizar} />
        </Stack.Navigator>
}
