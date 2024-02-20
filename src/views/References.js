import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import {style_01} from '../styles/style_01';

const References = () => {
    return(
        <SafeAreaView style={style_01.cont}>
            <View>
            {/* <Text style={style_01.h1}>Books used for Birds Research</Text> */}
            <Text style={style_01.referen01}>Aristófanes. (2003). Las Aves: ( ed.). El Cid Editor. 
            https://elibro.utn.elogim.com/es/lc/biblioutn/titulos/36018</Text>
                <Text style={style_01.referenNormal}>Strycker, N. & Pérez Sáez, A. (Trad.). (2022). 
                Esa cosa con plumas: la sorprendente vida de las aves y lo que nos revela sobre la 
                condición humana: (1 ed.). FCE - Fondo de Cultura Económica. 
                https://elibro.utn.elogim.com/es/lc/biblioutn/titulos/225602</Text>

            <Text style={style_01.h1}>React Native Research</Text>

            <Image style ={style_01.imgRefe} source={require('../imgs/Img_Carousel.png')} />
            </View>
        </SafeAreaView>
    );
};

export default References;