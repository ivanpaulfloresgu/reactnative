import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { LeoStackParamList } from '../../navigation/LeoStack/LeoFlowScreen'
import ViewBase from '../../components/ViewBase'
import { Image } from 'react-native'
import { COLORS } from '../../constants/colors'

import { IMAGES } from '../../constants/images'
type GifProps = StackScreenProps<LeoStackParamList, 'GIF_SECTION'>
export const GifSection: FC<GifProps> = ({ navigation }) => {
  return (
    <ViewBase
      style={{ flex: 1 }}
      showHeader
      showRightButton
      showLeftButton
      navigation={navigation}
      backgroundColor={COLORS.GRAY[100]}
      title="Gif">
      <Image
        source={IMAGES.gif.gif_practice}
        style={{ width: 420, height: 380 }}
      />
    </ViewBase>
  )
}
