import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'

import { LeoStackParamList } from '../../navigation/LeoStack/LeoFlowScreen'
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import ViewBaseB from '../../components/ViewBase'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { COLORS } from '../../constants/colors'
import TextField from '../../components/TextField'
import { gridUnits } from '../../utils/dimensions'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(10, 'Nombre imcompleto!')
    .max(50, 'Porfavor coloque un nombre real')
    .required('Ingrese su nombre completo')
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/, 'Ingrese valores Correstos'),
  email: Yup.string()
    .email('Correo invalido')
    .required('Ingrese su correo electronico'),

  password: Yup.string()
    .min(8, 'Contraseña corta')
    .required('Ingrese su contraseña')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Su contraseña debe tener como minimo 8 caracteres, mayusculas, numeros y caracteres especiales',
    ),
  confirmPassword: Yup.string()
    .min(8, 'Contraseña corta')
    .oneOf([Yup.ref('password')], 'Tu contraseña no coincide.')
    .required('Ingrese confirmacion de contraseña'),

  mobile: Yup.string()
    .min(9, 'Numero de celular corto')
    .max(9, 'Numero de celular largo ')
    .matches(/^[0-9]+$/, 'Ingrese un numero de celular real')
    .required('Ingrese un numero de celular'),
})

type RegisterProps = StackScreenProps<LeoStackParamList, 'REGISTER_SECTION'>

export const RegisterSection: FC<RegisterProps> = ({ navigation }) => {
  return (
    <ViewBaseB
      style={{ flex: 1 }}
      showHeader
      showRightButton
      showLeftButton
      navigation={navigation}
      title="Register">
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          mobile: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => Alert.alert(JSON.stringify(values))}>
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldTouched,
          isValid,
          handleSubmit,
        }) => (
          <View style={styles.wrapper}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.formConteiner}>
              <Text style={styles.title}>Registro</Text>
              <View style={styles.inputWrapper}>
                <TextField
                  placeholder="Nombre y Apellidos"
                  keyboardType="ascii-capable"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                  autoCapitalize={'none'}
                />
                {touched.name && errors.name && (
                  <Text style={styles.errorTxt}>{errors.name} </Text>
                )}
              </View>
              <View style={styles.inputWrapper}>
                <TextField
                  placeholder="Direccion de correo electronico"
                  keyboardType="email-address"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  autoCapitalize={'none'}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorTxt}>{errors.email} </Text>
                )}
              </View>
              <View style={styles.inputWrapper}>
                <TextField
                  iconImageColor={COLORS.BLUE[100]}
                  inputStyle={styles.TextFieldStyle}
                  showVisibility
                  placeholder="Ingrese contraseña"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  autoCapitalize={'none'}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorTxt}>{errors.password} </Text>
                )}
              </View>
              <View style={styles.inputWrapper}>
                <TextField
                  iconImageColor={COLORS.BLUE[100]}
                  inputStyle={styles.TextFieldStyle}
                  showVisibility
                  placeholder="Confirmar contraseña"
                  autoCapitalize={'none'}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={() => setFieldTouched('confirmPassword')}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.errorTxt}>{errors.confirmPassword} </Text>
                )}
              </View>
              <View style={styles.inputWrapper}>
                <TextField
                  placeholder="Nro celular"
                  keyboardType="phone-pad"
                  autoCapitalize={'none'}
                  value={values.mobile}
                  onChangeText={handleChange('mobile')}
                  onBlur={() => setFieldTouched('mobile')}
                />
                {touched.mobile && errors.mobile && (
                  <Text style={styles.errorTxt}>{errors.mobile} </Text>
                )}
              </View>
              <TouchableOpacity
                onPress={handleSubmit}
                disabled={!isValid}
                style={[
                  styles.submitBtn,
                  { backgroundColor: isValid ? '#395B64' : '#A5C9CA' },
                ]}>
                <Text style={styles.submitBtnTxt}> Ingresar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </ViewBaseB>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3333',
    paddingHorizontal: 15,
  },
  formConteiner: {
    backgroundColor: '#ABEBC6',
    padding: 20,
    borderRadius: 20,
    width: '100%',
  },
  title: {
    color: '#16213E',
    fontSize: 26,
    fontWeight: '400',
    marginBottom: 15,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  inputStyle: {
    borderColor: '#16213E',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  errorTxt: {
    fontSize: 12,
    color: '#FF0D10',
  },
  submitBtn: {
    // backgroundColor: '#395B64'
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  submitBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  TextFieldStyle: {
    paddingHorizontal: gridUnits(1),
    marginBottom: gridUnits(1),
    marginTop: gridUnits(0.5),
  },
})
