import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { LeoStackParamList } from '../../navigation/LeoStack/LeoFlowScreen'
import ViewBase from '../../components/ViewBase'
import { Image } from 'react-native'
import { COLORS } from '../../constants/colors'

import { IMAGES } from '../../constants/images'

type PlayProps = StackScreenProps<LeoStackParamList, 'PLAY_SECTION'>
export const PlaySection: FC<PlayProps> = ({ navigation }) => {
  //const goToHome = () => {
  //navigation.pop()
  //}
  return (
    <ViewBase
      style={{ flex: 1 }}
      showHeader
      showRightButton
      showLeftButton
      navigation={navigation}
      backgroundColor={COLORS.GRAY[100]}
      title="HOLA MUNDOS">
      <Image
        source={IMAGES.messi.messi_bonito}
        style={{ width: '100%', height: '100%' }}
      />
    </ViewBase>
  )
}
