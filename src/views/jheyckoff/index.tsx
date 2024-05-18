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
import { JheyckoffStackParamList } from '../../navigation/JheyckoffStack/JheyckoffFlowScreen'

type PlayProps = StackScreenProps<JheyckoffStackParamList, 'XBOX'>
export const xbox: FC<PlayProps> = ({ navigation }) => {
  
  return (
    <ViewBase
      showHeader
      showRightButton
      showLeftButton
      navigation={navigation}
      backgroundColor={COLORS.GRAY[100]}
      contentStyle={{ marginHorizontal: gridUnits(2), marginTop: gridUnits(5) }}
      title="Lista de Jheyckoff"
      >
      <ButtonBase.OutFill
        containerStyle={styles.SpaceButton}
        fillColor={COLORS.BLACK}
        labelColor={FontColor.BLUE_100}
        label="Button 1"
        // onPress={goToHome}
      />
      <ButtonBase.OutFill
        containerStyle={styles.SpaceButton}
        fillColor={COLORS.BLACK}
        labelColor={FontColor.BLUE_100}
        label="Button 2"
        // onPress={goToVideo}
      />
    </ViewBase>
  )
}

const styles = StyleSheet.create({
  SpaceButton: {
    marginVertical: 15,
  },
})
