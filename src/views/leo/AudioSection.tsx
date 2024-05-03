import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { LeoStackParamList } from '../../navigation/LeoStack/LeoFlowScreen'
import ViewBase from '../../components/ViewBase'
import { COLORS } from '../../constants/colors'
//import useSound from 'use-sound'
import Sound from 'react-native-sound'
import { ButtonBase } from '../../components/Button/ButtonBase'
import { StyleSheet } from 'react-native'
import { FontColor } from '../../components/Typography'

type AudioProps = StackScreenProps<LeoStackParamList, 'AUDIO_SECTION'>
export const AudioSection: FC<AudioProps> = ({ navigation }) => {
  const PlaySound = () => {
    var Eresono = new Sound('eresono.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error)
        return
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          Eresono.getDuration() +
          'number of channels: ' +
          Eresono.getNumberOfChannels(),
      )

      // Play the sound with an onEnd callback
      Eresono.play(success => {
        if (success) {
          console.log('successfully finished playing')
        } else {
          console.log('playback failed due to audio decoding errors')
        }
      })
    })
  }

  return (
    <ViewBase
      style={{ flex: 1 }}
      showHeader
      showRightButton
      showLeftButton
      navigation={navigation}
      backgroundColor={COLORS.GRAY[100]}
      title="Audio">
      <ButtonBase.OutFill
        containerStyle={styles.SpaceButton}
        fillColor={COLORS.BLACK}
        labelColor={FontColor.BLUE_100}
        label="Sonar"
        onPress={PlaySound}
      />
    </ViewBase>
  )
}
const styles = StyleSheet.create({
  SpaceButton: {
    marginVertical: 15,
  },
})
