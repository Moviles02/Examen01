import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {style_01} from '../styles/style_01';
import GetBird from '../components/getBird';

const InfoBird = ({navigation}) => {
    const valores = navigation.getState();
    const token = valores.routes[1].params.token;

    return (
    <SafeAreaView  style={style_01.cont}>
        <View>
        <GetBird navegar={navigation} token={token} />
        </View>
    </SafeAreaView>
    );
};

export default InfoBird;