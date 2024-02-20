
import { SafeAreaView, Text, View, Image, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { style_01 } from "../styles/style_01";
import { styles } from "../styles/styles";

import React, { useState, useEffect } from 'react';

const Home = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, []);

  const renderPokemon = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details', { pokemon: item.name })}>
      <Image source={{ uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png` }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

 return (
  <SafeAreaView style={style_01.cont}>
    <Image
      source={require("../imgs/logoPM.png")}
      style={style_01.image}
      resizeMode="cover"
    />
    <Text style={style_01.paragraph}>Primera generación</Text>

    <ScrollView>
    <View style={styles.container}>
        <FlatList
          data={pokemons}
          renderItem={renderPokemon}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.scrollViewContent}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
);
};






export default Home;
