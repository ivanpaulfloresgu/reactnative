import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { gridUnits } from '../../utils/dimensions';

const CustomInput: React.FC = () => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.placeholderBackground} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={COLORS.OPAQUE_BLACK}  // Cambia el color del placeholder según sea necesario
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  input: {
    height: gridUnits(5),
    borderColor: COLORS.GRAY[200],
    borderWidth: 1,
    paddingLeft: gridUnits(1.25),
    paddingRight: gridUnits(1.25),
    borderRadius:  gridUnits(0.625),
    zIndex: 2, // Asegúrate de que el TextInput esté por encima de la vista de fondo
  },
  placeholderBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.GRAY[200], // Color de fondo del placeholder
    zIndex: 1, // Asegúrate de que la vista de fondo esté detrás del TextInput
  },
});

export default CustomInput;
