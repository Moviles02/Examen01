import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Image, View } from 'react-native';
/* custom modules */
import Home from './src/views/home';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const BirdGallery = () => {
  
};

function DrawNav() {
  return (
    <Drawer.Navigator 
    initialRouteName="Casa de los pokemones"
    drawerContent={
      (props)=>{
        return(
          <SafeAreaView>
            <View
            style={{
              height:200,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomColor: '#f4f4f4',
              borderBottomWidth: 1,
              backgroundColor: "#F3D7CA"
            }}>
            
            </View>
            <DrawerItemList {...props}/>
          </SafeAreaView>
        )
      }
    }>
    <Drawer.Screen name="Casa de los pokemones" component={Home}/>
    </Drawer.Navigator>
  );
}

function App(){
  return(
    <NavigationContainer>
      <DrawNav/>
    </NavigationContainer>
  );
}

export default App;