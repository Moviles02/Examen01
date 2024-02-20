import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';



const HomeScreen = ({ navigation }) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { height: 3, width: 0 },
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
