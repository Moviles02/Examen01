import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, View, SafeAreaView } from 'react-native';
import HomeScreen from './src/views/home';
import InformacionPokemon from './src/views/informacionPokemon';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={InformacionPokemon} />
    </Stack.Navigator>
  );
}

function DrawNav() {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      drawerContent={(props) => (
        <SafeAreaView>
          <View
            style={{
              height: 200,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomColor: '#f4f4f4',
              borderBottomWidth: 1,
              backgroundColor: "#F3D7CA"
            }}>
            {}
          </View>
          <DrawerItemList {...props} />
        </SafeAreaView>
      )}
    >
      {}
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      {}
    </Drawer.Navigator>
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
