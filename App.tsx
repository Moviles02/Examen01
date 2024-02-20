import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Image, View } from 'react-native';
/* custom modules */
import Home from './src/views/home';
import Gallery from './src/views/gallery';
import References from './src/views/References';
import About from './src/views/about';
import InfoBird from './src/views/infoBird';
import InfoComment from './src/views/InfoComment';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const BirdGallery = () => {
  return (
    <Stack.Navigator >
    <Stack.Screen name="ImgGallery" component={Gallery} options={{title: 'Lista de aves'}} />
    <Stack.Screen
      name="InfoBird"
      component={InfoBird}
      options={{title: 'Bird Data'}}
    />
    <Stack.Screen
      name="InfoComment"
      component={InfoComment}
      options={{title: 'Add comment'}}
    />
    </Stack.Navigator>
  );
};

function DrawNav() {
  return (
    <Drawer.Navigator 
    initialRouteName="Home"
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
            <Image
              source={require('../Lab01_App/src/imgs/logo.jpeg')}
              style={{
                height: 130,
                width: 130,
                borderRadius: 65
              }}
            />
            </View>
            <DrawerItemList {...props}/>
          </SafeAreaView>
        )
      }
    }>
    <Drawer.Screen name="Home" component={Home}/>
    <Drawer.Screen name="Gallery" component={BirdGallery} />
    <Drawer.Screen name="References" component={References} />
    <Drawer.Screen name="About" component={About} />
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