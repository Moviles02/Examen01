import React, {useEffect, useState} from 'react';
import {PATHURL, PORT} from './config/config';
import { styleBirds } from '../styles/styleBirds';

import {
FlatList,
Image,
ScrollView,
SafeAreaView,
Text,
TouchableOpacity,
View,
} from 'react-native';
import axios from 'axios';

const GetBird = props => {
const nav = props.navegar;
const token = props.token;

const [data, setData] = useState([]);
const [comments, setComments] = useState([]);

const Obtener = async () => {
try {
    axios.get(`${PATHURL}:${PORT}/bird/${token}`).then(response => {
    const json = response.data.data[0];
    setData(json);
    });
} catch (error) {
    console.error(error);
}

setComments(data.comments);
};

useEffect(() => {
Obtener();
}, []);

const onPressViewAddComment = token => {
nav.navigate('InfoComment', {token: token});
};

return (
<SafeAreaView>
    <ScrollView
    contentContainerStyle={{ paddingTop: 30 }}>
    <View style={styleBirds.card}>
    <Text style={styleBirds.tit_02}>{data.name}</Text>
    <Image style ={styleBirds.imgContainer2} source={require('../imgs/Birds/Pigeons.png')} />
    <Text style={styleBirds.tit_05}>{data.description}</Text>
    </View>
    <View>
    <TouchableOpacity
        style={styleBirds.itemText2}
        onPress={() => onPressViewAddComment(data._id)}>
        <View>
        <Text style={styleBirds.tit_04}>Add Comment</Text>
        </View>
    </TouchableOpacity>
    </View>
    <FlatList
    data={data.comments}
    keyExtractor={({id}, index) => id}
    renderItem={({item}) => (
        <TouchableOpacity key={item.comment} style={styleBirds.itemText}>
        <View>
            <Text style={styleBirds.tit_02}>{item.comment}</Text>
            <Text style={styleBirds.author}>{item.author}</Text>
        </View>
        </TouchableOpacity>
    )}
    />
    </ScrollView>
</SafeAreaView>
);
};

export default GetBird;