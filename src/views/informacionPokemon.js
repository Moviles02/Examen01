import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { style_01 } from "../styles/style_01";


const InformacionPokemon = ({ route }) => {
  const { pokemon } = route.params;
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => response.json())
      .then(data => setPokemonDetails(data))
      .catch(error => console.error(error));
  }, [pokemon]);

  if (!pokemonDetails) {
    return <Text>Cargando...</Text>;
  }

  return (
    <ScrollView style={style_01.container}>
      <View style={style_01.headerContainer}>
        <Image
          source={{ uri: pokemonDetails.sprites.front_default }}
          style={style_01.pokemonImage}
        />
        <View style={style_01.infoContainer}>
          <Text style={style_01.name}>{pokemonDetails.name.toUpperCase()}</Text>
          <Text style={style_01.featuresText}>Código: {pokemonDetails.id}</Text>
          <Text style={style_01.featuresText}>Altura: {pokemonDetails.height}</Text>
          <Text style={style_01.featuresText}>Peso: {pokemonDetails.weight}</Text>
        </View>
      </View>

      <View style={style_01.sectionContainer}>
        <Text style={style_01.sectionTitle}>Tipos a los que pertenece</Text>
        {pokemonDetails.types.map((typeInfo) => (
          <Text key={typeInfo.type.name} style={style_01.listItem}>
            {typeInfo.type.name}
          </Text>
        ))}
      </View>

      <View style={style_01.sectionContainer}>
        <Text style={style_01.sectionTitle}>Movimientos</Text>
        {pokemonDetails.moves.map((moveInfo,
index) => (
<Text key={index} style={style_01.listItem}>
{moveInfo.move.name}
</Text>
))}
</View>
</ScrollView>
);
};

export default InformacionPokemon;