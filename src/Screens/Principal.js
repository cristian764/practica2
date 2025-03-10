import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import CambiaImagen from '../componentes/CambiaImagen';
import styles from '../estilos/style';

const c1 = require('../../assets/imagenes/c1.jpg');
const c2 = require('../../assets/imagenes/c2.jpg');
const c3 = require('../../assets/imagenes/c3.jpg');
const c4 = require('../../assets/imagenes/c4.jpg');
const c5 = require('../../assets/imagenes/c5.jpg');

export default function Principal() {
  const arrayImage = [
    { image1: require('../../assets/imagenes/carro1.png'), image2: require('../../assets/imagenes/carro2.gif') },
    { image1: require('../../assets/imagenes/lavamanos1.jpg'), image2: require('../../assets/imagenes/lavamanos2.gif') },
    { image1: require('../../assets/imagenes/plantas1.png'), image2: require('../../assets/imagenes/plantas2.gif') },
    { image1: require('../../assets/imagenes/regadera1.png'), image2: require('../../assets/imagenes/regadera2.gif') },
    { image1: require('../../assets/imagenes/tasa.jpg'), image2: require('../../assets/imagenes/tasa.jpg') },
  ];

  const [contador, setContador] = useState(100);
  const [imagen, setImagen] = useState(c5);

  useEffect(() => {
    if (contador >= 81 && contador <= 100) setImagen(c5);
    else if (contador >= 61 && contador <= 80) setImagen(c4);
    else if (contador >= 41 && contador <= 60) setImagen(c3);
    else if (contador >= 21 && contador <= 40) setImagen(c2);
    else if (contador >= 1 && contador <= 20) setImagen(c1);
  }, [contador]);

  return (
    <View style={styles.container}>
      <View style={styles.smallImagesContainer}>
        <CambiaImagen image1={arrayImage[0].image1} image2={arrayImage[0].image2} contador={contador} setContador={setContador} />
        <CambiaImagen image1={arrayImage[1].image1} image2={arrayImage[1].image2} contador={contador} setContador={setContador} />
      </View>

      <View>
        <Text style={styles.numero}>{contador}</Text>
      </View>

      <View>
        <Image source={imagen} style={styles.imagen} />
      </View>

      <View style={styles.smallImagesContainer}>
        <CambiaImagen image1={arrayImage[2].image1} image2={arrayImage[2].image2} contador={contador} setContador={setContador} />
        <CambiaImagen image1={arrayImage[3].image1} image2={arrayImage[3].image2} contador={contador} setContador={setContador} />
        <CambiaImagen image1={arrayImage[4].image1} image2={arrayImage[4].image2} contador={contador} setContador={setContador} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title='Rellenar' onPress={() => setContador(100)} color='#3498db' />
      </View>

      <View>
        <Text>
          Fuentes Osorio Cristian{'\n'}
          Ramírez Flores Kevin
        </Text>
      </View>
    </View>
  );
}
