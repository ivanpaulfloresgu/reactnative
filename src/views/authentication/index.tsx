import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { AuthStackParamList } from '../../navigation/AuthStack/AuthFlowScreen'
import { Dimensions, Image, StyleSheet, TextInput, View } from 'react-native'
import { gridUnits, widthPercent } from '../../utils/dimensions'
import {
  FontAlignment,
  FontColor,
  FontFamily,
  FontSize,
  Typography,
} from '../../components/Typography'
import { IMAGES } from '../../constants/images'
import { COLORS } from '../../constants/colors'
import { ButtonBase } from '../../components/Button/ButtonBase'
type AuthenticationProps = StackScreenProps<AuthStackParamList, 'LOGIN'>

const Authentication: FC<AuthenticationProps> = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  const goToHomeView = () => {
    console.log('Entro al home')
  }
  return (
    <View style={styles.container}>
      <Image
        source={IMAGES.login.example_gym}
        style={{ width: windowWidth, height: windowHeight }}
      />
      <View style={styles.loginContainer}>
        <Image source={IMAGES.login.pesa_icon} style={styles.iconStyle} />
        <Typography.MontserratBold
          color={FontColor.WHITE}
          size={FontSize.XXL}
          style={styles.title}>
          {'GymFit'}
        </Typography.MontserratBold>

        <View style={styles.textContainer}>
          <View style={styles.text}>
            <Typography.MontserratBold
              color={FontColor.YELLOW_200}
              size={FontSize.XXL}
              alignment={FontAlignment.LEFT}>
              {'Bienvenido de nuevo'}
            </Typography.MontserratBold>
            <Typography.AgrandirRegular
              color={FontColor.WHITE}
              size={FontSize.BASE}
              alignment={FontAlignment.LEFT}>
              {'Accede a tu cuenta a continuación'}
            </Typography.AgrandirRegular>
            <View style={styles.containerImput}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={'white'}
              />
            </View>
            <View style={styles.containerImput}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={'white'}
              />
            </View>
            <Typography.MontserratBold
              color={FontColor.YELLOW_200}
              size={FontSize.BASE}
              alignment={FontAlignment.LEFT}>
              {'¿Has olvidado tu contraseña?'}
            </Typography.MontserratBold>
            <ButtonBase.OutFill
              fillColor={COLORS.YELLOW[200]}
              label={'Iniciar'}
              width={widthPercent(0.6)}
              containerStyle={styles.buttonContainer}
              labelStyle={{
                fontSize: FontSize.SM,
                fontFamily: FontFamily.MONTSERRAT_BOLD,
              }}
              labelColor={FontColor.WHITE}
              onPress={goToHomeView}
            />
            <ButtonBase.OutLine
              borderLineColor={COLORS.YELLOW[200]}
              label={'Registrate'}
              width={widthPercent(0.6)}
              containerStyle={styles.registerButton}
              labelStyle={{
                fontSize: FontSize.SM,
                fontFamily: FontFamily.MONTSERRAT_BOLD,
              }}
              labelColor={FontColor.WHITE}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Authentication

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    borderRadius: gridUnits(3),
    marginVertical: gridUnits(1),
  },
  container: {
    flex: 1,
  },
  containerImput: {
    borderColor: COLORS.NEUTRAL[100],
    borderRadius: 4,
    borderWidth: 0.5,
    marginVertical: gridUnits(1),
  },
  iconStyle: {
    height: gridUnits(3.5),
    marginBottom: gridUnits(1),
    marginTop: gridUnits(6),
    resizeMode: 'contain',
    tintColor: COLORS.YELLOW[200],
    transform: [{ rotate: '90deg' }],
    width: gridUnits(3.5),
  },
  input: {
    fontSize: FontSize.XS,
  },
  loginContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  registerButton: {
    alignSelf: 'center',
    backgroundColor: COLORS.TRANSPARENT,
    borderRadius: gridUnits(3),
    borderWidth: 2,
    marginVertical: gridUnits(1),
  },
  text: {
    alignSelf: 'flex-end',
  },
  textContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    marginTop: gridUnits(30),
  },
  title: {
    marginTop: gridUnits(1),
  },
})
