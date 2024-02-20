import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import { style_01 } from "../styles/style_01";

const Home = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  const [generation, setGeneration] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  const loadGeneration = (gen) => {
    setIsVisible(true);
    const offset = (gen - 1) * 151;
    const limit = 151;

    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    loadGeneration(generation);
  }, [generation]);

  const renderPokemon = ({ item }) => (
    <TouchableOpacity
      style={style_01.card}
      onPress={() => navigation.navigate("Details", { pokemon: item.name })}
    >
      <Image
        source={{
          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png`,
        }}
        style={style_01.image}
      />
      <Text style={style_01.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={style_01.cont}>
      <Image
        source={require("../imgs/logoPM.png")}
        style={style_01.imageLogo}
        resizeMode="cover"
      />
      <View style={style_01.buttonContainer}>
        <Button title="Generación 1" onPress={() => setGeneration(1)} />
        <Button title="Generación 2" onPress={() => setGeneration(2)} />
        <Button title="Generación 3" onPress={() => setGeneration(3)} />
        <Button title="Generación 4" onPress={() => setGeneration(4)} />
        <Button title="Generación 5" onPress={() => setGeneration(5)} />

        <Button
          title={isVisible ? "Ocultar" : "Mostrar"}
          onPress={() => setIsVisible(!isVisible)}
        />
      </View>

      {isVisible && (
        <ScrollView>
          <View style={style_01.container}>
            <FlatList
              data={pokemons}
              renderItem={renderPokemon}
              keyExtractor={(item) => item.name}
              contentContainerStyle={style_01.scrollViewContent}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Home;
