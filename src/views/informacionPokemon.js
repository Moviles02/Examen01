import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  pokemonImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  infoContainer: {
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: 'yellow',
    borderRadius: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  featuresText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#000',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    backgroundColor: 'orange',
    textAlign: 'center',
    paddingVertical: 5,
    borderRadius: 10,
  },
  listItem: {
    fontSize: 18,
    color: '#000',
    paddingVertical: 5,
  },
});

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
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: pokemonDetails.sprites.front_default }}
          style={styles.pokemonImage}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{pokemonDetails.name.toUpperCase()}</Text>
          <Text style={styles.featuresText}>Código: {pokemonDetails.id}</Text>
          <Text style={styles.featuresText}>Altura: {pokemonDetails.height}</Text>
          <Text style={styles.featuresText}>Peso: {pokemonDetails.weight}</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Tipos a los que pertenece</Text>
        {pokemonDetails.types.map((typeInfo) => (
          <Text key={typeInfo.type.name} style={styles.listItem}>
            {typeInfo.type.name}
          </Text>
        ))}
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Movimientos</Text>
        {pokemonDetails.moves.map((moveInfo,
index) => (
<Text key={index} style={styles.listItem}>
{moveInfo.move.name}
</Text>
))}
</View>
</ScrollView>
);
};

export default InformacionPokemon;