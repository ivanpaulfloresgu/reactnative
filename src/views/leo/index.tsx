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

type PlayProps = StackScreenProps<LeoStackParamList, 'PLAY'>
export const Play: FC<PlayProps> = ({ navigation }) => {
  const goToHome = () => {
    navigation.push(LeoFlowScreen.PLAY_SECTION)
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
      <ButtonBase.OutFill
        fillColor={COLORS.BLACK}
        labelColor={FontColor.BLUE_100}
        label="Presioname"
        onPress={goToHome}
      />
    </ViewBase>
  )
}
