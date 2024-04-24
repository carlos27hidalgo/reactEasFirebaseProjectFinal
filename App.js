import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loggin from './screens/Loggin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from './screens/Calculator';
import CreateUser from './screens/CreateUser';
import Snake from './screens/Snake';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loggin'>
        <Stack.Screen
          name="Home"
          component={Loggin}
          options={{title: 'Bienvenido'}}
        />
        <Stack.Screen
          name='Create'
          component={CreateUser}
          options={{title: 'Crea tu usuario'}}
        />
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{title: 'A calcular!'}}
        />
        <Stack.Screen
          name='SnakeGame'
          component={Snake}
          options={{title: 'A jugar!'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


