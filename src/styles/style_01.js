import { StyleSheet, useWindowDimensions } from "react-native";

export const style_01 = StyleSheet.create({
  // Estilos del home

  
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    height: "auto",
    width: "auto",

  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginVertical: 8,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#CCCCCC",
    borderRadius: 100,
    marginVertical: 3,
    marginHorizontal: 5,
    padding: 0,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 60,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  listContainer: {
    flex: 1,

  },
  scrollViewContent: {
  },
  
  cont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
  generationList: {
    flexDirection: "row",
    height:45,
    margin:20,
    marginBottom: 40,
    marginLeft: 0,
  },
  button: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#E0E0E0",
    borderRadius: 20,
  },
  activeButton: {
    backgroundColor: "#4CAF50",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
  generationTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },



  //Información pokemón
  buttonContainer: {},
  headerContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  pokemonImage: {
    width: 160,
    height: 160,
    alignSelf: "center",
  },
  infoContainer: {
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "yellow",
    borderRadius: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  featuresText: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#000",
    textAlign: "left",
    alignSelf: "stretch",
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    backgroundColor: "orange",
    textAlign: "center",
    paddingVertical: 5,
    borderRadius: 10,
  },
  listItem: {
    fontSize: 18,
    color: "#000",
    paddingVertical: 5,
  },
});
