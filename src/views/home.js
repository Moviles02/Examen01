import React from 'react';
import { SafeAreaView, Text, View, Image, ScrollView } from 'react-native';
import { style_01 } from '../styles/style_01';

const Home = () => {
return(
    <SafeAreaView style={style_01.cont}>
        <ScrollView>
            <View style={style_01.header}>
                <Text style={style_01.h1}>Aves de Costa Rica</Text>
            </View>
            <Image 
                source={require('../imgs/Birds/BirdFlying.jpg')}
                style={style_01.image}
                resizeMode="cover"
            />
            <Text style={style_01.paragraph}>
                Primera generación
            </Text>
        </ScrollView>
    </SafeAreaView>
);
};

export default Home;