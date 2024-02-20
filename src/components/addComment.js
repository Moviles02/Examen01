import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {PATHURL, PORT} from './config/config';
import axios from 'axios';

import { styleBirds } from '../styles/styleBirds';

import {useState} from 'react';

const AddComment = props => {
const nav = props.navegar;
const token = props.token;

const [data, setData] = useState([]);
const [txtComment, setComment] = useState('');
const [txtAuthor, setAuthor] = useState('');

const onPressAddComments = async () => {
const expre = {
    id: token,
    comment: txtComment,
    author: txtAuthor,
};

console.log(expre);
try {
    axios.post(`${PATHURL}:${PORT}/comment`, expre).then(response => {
    const json = response.data;
    setData(json.data);
    nav.navigate('InfoBird', {token: token});
    });
} catch (error) {
    console.error(error);
}
};

const onPressAdd = () => {
setComment('');
setAuthor('');
};

return (
<View>
    <View>
    <TextInput
        style={styleBirds.entries}
        value={txtComment}
        placeholder={'Write your comment...'}
        onChangeText={newValue => {
        setComment(newValue);
        }}
    />
    <TextInput
        style={styleBirds.entries}
        value={txtAuthor}
        placeholder={'Write your nickname'}
        onChangeText={newValue => {
        setAuthor(newValue);
        }}
    />
    <TouchableOpacity
        style={styleBirds.itemText2}
        onPress={() => onPressAddComments()}>
        <Text style={styleBirds.tit_04}> Add Comment </Text>
    </TouchableOpacity>
    </View>
</View>
);
};

export default AddComment;