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
import { styles } from "../styles/styles";

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
      style={styles.card}
      onPress={() => navigation.navigate("Details", { pokemon: item.name })}
    >
      <Image
        source={{
          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png`,
        }}
        style={styles.image}
      />
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
      <View style={styles.buttonContainer}>
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
          <View style={styles.container}>
            <FlatList
              data={pokemons}
              renderItem={renderPokemon}
              keyExtractor={(item) => item.name}
              contentContainerStyle={styles.scrollViewContent}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Home;
