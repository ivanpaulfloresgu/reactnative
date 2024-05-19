import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'

import {
  LeoFlowScreen,
  LeoStackParamList,
} from '../../navigation/LeoStack/LeoFlowScreen'
import ViewBase from '../../components/ViewBase'
import { FontColor } from '../../components/Typography'
import { COLORS } from '../../constants/colors'
import { gridUnits } from '../../utils/dimensions'
import { ButtonBase } from '../../components/Button/ButtonBase'
import { StyleSheet } from 'react-native'
import TextField from '../../components/TextField'

type PlayProps = StackScreenProps<LeoStackParamList, 'PLAY'>
export const Play: FC<PlayProps> = ({ navigation }) => {
  const goToHome = () => {
    navigation.push(LeoFlowScreen.PLAY_SECTION)
  }
  const goToVideo = () => {
    navigation.push(LeoFlowScreen.VIDEO_SECTION)
  }
  const goToGif = () => {
    navigation.push(LeoFlowScreen.GIF_SECTION)
  }
  const goToAudio = () => {
    navigation.push(LeoFlowScreen.AUDIO_SECTION)
  }
  const goToRegister = () => {
    navigation.push(LeoFlowScreen.REGISTER_SECTION)
  }
  return (
    <ViewBase
      showHeader
      showRightButton
      showLeftButton
      navigation={navigation}
      backgroundColor={COLORS.GRAY[100]}
      contentStyle={{ marginHorizontal: gridUnits(2), marginTop: gridUnits(5) }}
      title="Lista de Leonardo">
      <TextField
        label={'Contraseña SANNA'}
        placeholder="Contraseña SANNA"
        showVisibility
        //  inputStyle={styles.TextFieldStyle}
        keyboardType={'number-pad'}
        //maxLength={MAX_PASSWORD_LENGTH}
        // value={password}
        //onChangeText={handlePasswordText}
      />
      <ButtonBase.OutFill
        containerStyle={styles.SpaceButton}
        fillColor={COLORS.BLACK}
        labelColor={FontColor.BLUE_100}
        label="Imagen"
        onPress={goToHome}
      />
      <ButtonBase.OutFill
        containerStyle={styles.SpaceButton}
        fillColor={COLORS.BLACK}
        labelColor={FontColor.BLUE_100}
        label="Video"
        onPress={goToVideo}
      />
      <ButtonBase.OutFill
        containerStyle={styles.SpaceButton}
        fillColor={COLORS.BLACK}
        labelColor={FontColor.BLUE_100}
        label="Gif"
        onPress={goToGif}
      />
      <ButtonBase.OutFill
        containerStyle={styles.SpaceButton}
        fillColor={COLORS.BLACK}
        labelColor={FontColor.BLUE_100}
        label="Sonido"
        onPress={goToAudio}
      />
      <ButtonBase.OutFill
        containerStyle={styles.SpaceButton}
        fillColor={COLORS.BLACK}
        labelColor={FontColor.BLUE_100}
        label="Formulario"
        onPress={goToRegister}
      />
    </ViewBase>
  )
}

const styles = StyleSheet.create({
  SpaceButton: {
    marginVertical: 15,
  },
})
