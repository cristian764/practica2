import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import InicioSesion from './src/Screens/InicioSesion';
import Principal from './src/Screens/Principal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='InicioSesion'>
        <Stack.Screen
          name='InicioSesion'
          component={InicioSesion}
          options={{ title: 'Iniciar Sesión' }}
        />
        <Stack.Screen
          name='Principal'
          component={Principal}
          options={{ title: 'Pantalla Principal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
