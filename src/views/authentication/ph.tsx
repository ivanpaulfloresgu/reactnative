import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput: React.FC = () => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.placeholderBackground} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="rgba(0,0,0,0.4)" // Cambia el color del placeholder según sea necesario
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    zIndex: 2, // Asegúrate de que el TextInput esté por encima de la vista de fondo
  },
  placeholderBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'lightgray', // Color de fondo del placeholder
    zIndex: 1, // Asegúrate de que la vista de fondo esté detrás del TextInput
  },
});

export default CustomInput;
