import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { LeoStackParamList } from '../../navigation/LeoStack/LeoFlowScreen'
import ViewBase from '../../components/ViewBase'
import { COLORS } from '../../constants/colors'
type AudioProps = StackScreenProps<LeoStackParamList, 'AUDIO_SECTION'>
export const AudioSection: FC<AudioProps> = ({ navigation }) => {
  return (
    <ViewBase
      style={{ flex: 1 }}
      showHeader
      showRightButton
      showLeftButton
      navigation={navigation}
      backgroundColor={COLORS.GRAY[100]}
      title="Audio"></ViewBase>
  )
}
