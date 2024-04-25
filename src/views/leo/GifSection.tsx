import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { LeoStackParamList } from '../../navigation/LeoStack/LeoFlowScreen'
import ViewBase from '../../components/ViewBase'
import { COLORS } from '../../constants/colors'
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
      title="Gif"></ViewBase>
  )
}
