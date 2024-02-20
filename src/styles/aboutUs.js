import { Dimensions, StyleSheet } from "react-native";

const alto = Dimensions.get("window").height - 150;

// crea paleta de colores
const principal = "#1B2E66";
const naranja = "#FF9900";
const blanco = "#FFFFFF";
const gris_1 = "#B2BDD5";

// crea la hoja de estilos
export const aboutUs = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
  },

  divMain: {
    backgroundImage: `url(${require("../imgs/Colaborators/Kenneth.jpg")})`,
    backgroundSize: "cover", // Ajusta el tamaño de la imagen al contenedor
    backgroundRepeat: "no-repeat", // Evita la repetición de la imagen
    backgroundColor: "#F3D7CA",
  },

  divFooter: {
    paddingTop: 5,
    backgroundColor: principal,
    alignItems: "center",
    height: 50,
  },

  tarjeta: {
    backgroundColor: blanco,
    borderRadius: 10,
    margin: 7,
    padding: 0,
    height: 115,
  },
  imagenStyle: {
    width: 120,
    height: 115,
    marginTop: -102,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  imagenStyle01: {
    width: 200,
    height: 200,
    marginTop: -102,
    marginLeft: 23,
    marginBottom: 20,
    borderRadius: 20,
  },
  textInfo: {
    color: "#333",
    fontSize: 14,
    width: 1000,
    left: 130,
    marginTop: 15,
  },

  LineaBlanca: {
    width: 30,
    height: 30,
    backgroundColor: "white",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  popupText: {
    fontSize: 17,
    marginBottom: 5,
    textAlign: "center",
  },
  closeButton: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 15,
    height: 30,
  },
  modalContent: {
    backgroundColor: "#F3D7CA",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    height: "40%",
  },
  textAbout: {
    fontSize: 13,
    marginBottom: 5,
    textAlign: "center",
    color: "black",
  },
});