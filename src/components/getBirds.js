import React, {useEffect, useState} from 'react';
import {PATHURL, PORT} from './config/config';
import { Image } from 'react-native';
import { styleBirds } from '../styles/styleBirds';
import Carousel from './carousel';

import {
FlatList,
SafeAreaView,
Text,
TouchableOpacity,
View,
} from 'react-native';
import axios from 'axios';

const GetBirds = props => {

const getElementImage = (element)=>{
    switch(element){
        case 'Quetzal':
            return require('../imgs/Birds/Quetzal.jpg')
        case 'Tucan Pico Iris':
            return require('../imgs/Birds/Tucan.jpg')
        case 'Lapa Roja':
            return require('../imgs/Birds/LapaRoja.jpg')
        case 'Saltarín Colilargo':
            return require('../imgs/Birds/SaltarinColilargo.jpg')
        case 'Cabezón Cabeza roja':
            return require('../imgs/Birds/Cabezon.jpg')
        case 'Momo Cijiceleste':
            return require('../imgs/Birds/MomoCiji.jpg')
        case 'Colibrí Morado':
            return require('../imgs/Birds/ColibriMorado.jpg')
        case 'Colibrí coroniblanco':
            return require('../imgs/Birds/Coriblanco.jpg')
        
    }
}

const nav = props.navegar;
const [data, setData] = useState([]);

const Obtener = async () => {
try {
    axios.get(`${PATHURL}:${PORT}/bird`).then(response => {
    const json = response.data;
    setData(json.data);
    });
} catch (error) {
    console.error(error);
}
};

useEffect(() => {
Obtener();
}, []);

const onPressViewArticle = token => {
nav.navigate('InfoBird', {token: token});
};

return (
<SafeAreaView>
    <FlatList
    contentContainerStyle={{ paddingTop: 30 }}
    data={data}
    keyExtractor={({id}, index) => id}
    renderItem={({item}) => (
        <TouchableOpacity
        key={item.name}
        style={styleBirds.itemText}
        onPress={() => onPressViewArticle(item._id)}>
        <View style={styleBirds.itemContainer}>
            <Text style={styleBirds.tit_02}>{item.name}</Text>
            <Image source={getElementImage(item.name)} style={{width: 334, height: 230}}/>
            {/*<Carousel/>*/}
        </View>
        </TouchableOpacity>
    )}
    />
</SafeAreaView>
);
};

export default GetBirds;