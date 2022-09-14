import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import SettingsScreen from '../telas/configuracoes';
import RotadeCompras from "./rotacompras";

const Tab = createBottomTabNavigator();

export default function Rotas(){
    return <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                iconName = focused
                ? 'home'
                : 'home';
                } else if (route.name === 'Fale conosco') {
                iconName = focused ? 'wechat' : 'wechat';
                }

                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#00A8FF',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                paddingBottom: 5,
                height: 50,
            }
            
        })}>    
            <Tab.Screen name="Home" component={RotadeCompras} />
            <Tab.Screen name="Fale conosco" component={SettingsScreen} />
        </Tab.Navigator> 
    </NavigationContainer>
}
