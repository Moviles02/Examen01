import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, View, SafeAreaView } from 'react-native';
import HomeScreen from './src/views/home';
import InformacionPokemon from './src/views/informacionPokemon';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={InformacionPokemon} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <DrawNav />
    </NavigationContainer>
  );
}

export default App;
