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
                Cada ave está especializada a un nicho respectivo, es por esto que
                son consideradas indicadores biológicos, es decir, la presencia de una
                especie específica en un determinado lugar, puede indicar salud o no
                en los ecosistemas. La función de las aves en el medio ambiente es
                vital, sin ellas no se producirían las grandes cadenas que hacen que
                los ecosistemas funcionen.
            </Text>
        </ScrollView>
    </SafeAreaView>
);
};

export default Home;