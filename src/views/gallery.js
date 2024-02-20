import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import {style_01} from '../styles/style_01';
import GetBirds from '../components/getBirds';
const Gallery = ({navigation}) => {
    return(
        <SafeAreaView style={style_01.cont}>
            <View>
                <GetBirds navegar={navigation} />
            </View>
        </SafeAreaView>
    );
};

export default Gallery;