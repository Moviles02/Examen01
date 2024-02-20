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

  const generations = Array.from({ length: 5 }, (_, i) => i + 1);

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

  const renderGenerationButton = ({ item }) => (
    <TouchableOpacity
      onPress={() => setGeneration(item)}
      style={[
        style_01.button,
        generation === item && style_01.activeButton, // Agrega un estilo adicional si es la generación activa
      ]}
    >
      <Text style={style_01.buttonText}>Generación {item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={style_01.cont}>
      <Image
        source={require("../imgs/logoPM.png")}
        style={style_01.Imagelogo}
        resizeMode="cover"
      />
      <FlatList
        horizontal
        data={generations}
        renderItem={renderGenerationButton}
        keyExtractor={(item) => item.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style_01.generationList}
      />
      {isVisible && (
        <>
          <Text style={style_01.generationTitle}>Generación {generation}</Text>
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
        </>
      )}
    </SafeAreaView>
  );
};

export default Home;
