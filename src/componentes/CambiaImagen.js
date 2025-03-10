import React, { useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from '../estilos/style';

function CambiaImagen({ image1, image2, contador, setContador }) {
  const [actual, setActual] = useState(image1);

  const handlePress = () => {
    if (actual === image1) {
      setActual(image2);
      setContador(prev => Math.max(0, prev - 10));
    } else {
      setActual(image1);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image source={actual} style={styles.cambiaImagen} />
    </TouchableOpacity>
  );
}

export default CambiaImagen;
