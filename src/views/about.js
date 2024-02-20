import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { aboutUs } from "../styles/aboutUs";

const curso = "Desarrollo Movil II - (ITI-721)";
const data = [
  {
    nombre: "Kenneth Piedra Vargas",
    id: "6-0482-0611•Estudiante",
    Date: curso,
    imagen: require("../imgs/Colaborators/Kenneth.jpg"),
    correo: "kepiedravar@est.utn.ac.cr",
  },
  {
    nombre: "Sebastian Mata Ortega",
    id: "6-0485-0441•Estudiante",
    Date: curso,
    imagen: require("../imgs/Colaborators/Sebastian.jpg"),
    correo: "semataoe@est.utn.ac.cr",
  },
  {
    nombre: "Eduar Andres Arias Quiros",
    id: "1-1897-0820•Estudiante",
    Date: curso,
    imagen: require("../imgs/Colaborators/Edward.jpg"),
    correo: "edariasqu@est.utn.ac.cr",
  },
  {
    nombre: "William Cubero Navarro",
    id: "6-0480-0206•Estudiante",
    Date: curso,
    imagen: require("../imgs/Colaborators/William.jpg"),
    correo: "wicuberona@est.utn.ac.cr",
  },
  {
    nombre: "Dinier Ferreto Moraga",
    id: "6-0466-0053•Estudiante",
    Date: curso,
    imagen: require("../imgs/Colaborators/Dinnier.jpg"),
    correo: "diferretomo@est.utn.ac.cr",
  },
  {
    nombre: "Melanie Rodriguez Jimenez",
    id: "6-0470-0933•Estudiante",
    Date: curso,
    imagen: require("../imgs/Colaborators/Melanie.jpg"),
    correo: "merodriguezji@est.utn.ac.cr",
  },
];

const Index = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openPopup = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <View>
      <View style={aboutUs.divMain}>
        {/* Texto añadido */}
        <ScrollView style={{ marginTop: 8 }}>
          <Text style={aboutUs.textAbout}>
            Nosotros somos un pequeño equipo del curso Desarrollo Móvil II
            (ITI-721), impartido por la Universidad Técnica Nacional. Alguna
            sugerencia, duda o consulta, por favor utilizar los correos
            electrónicos de los participantes de este proyecto.
          </Text>

          {data.map((item, index) => (
            <TouchableOpacity
              style={aboutUs.tarjeta}
              key={index}
              onPress={() => openPopup(item)}
            >
              <Text style={aboutUs.textInfo}>{item.nombre}</Text>
              <Text style={aboutUs.textInfo}>{item.id}</Text>
              <Text style={aboutUs.textInfo}>{item.Date}</Text>
              <Image source={item.imagen} style={aboutUs.imagenStyle} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <Modal
        visible={selectedItem !== null}
        animationType="slide"
        transparent={true}
        onRequestClose={closePopup}
      >
        <View style={aboutUs.modalContainer}>
          <View style={aboutUs.modalContent}>
            <Image
              style={aboutUs.imagenStyle01}
              source={selectedItem?.imagen}
            />
            <Text style={aboutUs.popupText}>{selectedItem?.nombre}</Text>
            <Text style={aboutUs.popupText}>{selectedItem?.id}</Text>
            <Text style={aboutUs.popupText}>{selectedItem?.correo}</Text>

            <Text style={aboutUs.popupText}>{selectedItem?.Date}</Text>
            <TouchableOpacity onPress={closePopup}>
              <Text style={aboutUs.closeButton}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Index;