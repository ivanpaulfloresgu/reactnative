import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import ViewBase from '../../components/ViewBase'
import {
  FontAlignment,
  FontColor,
  FontSize,
  Typography,
} from '../../components/Typography'
import { COLORS } from '../../constants/colors'
import { gridUnits } from '../../utils/dimensions'
import { GinoStackParamList } from '../../navigation/GinoStack/GinoFlowScreen'
import { StyleSheet } from 'react-native'

type MangasProps = StackScreenProps<GinoStackParamList, 'MANGAS'>
export const Mangas: FC<MangasProps> = ({ navigation }) => {
  return (
    <ViewBase
      showHeader
      showRightButton
      showLeftButton
      navigation={navigation}
      backgroundColor={COLORS.GRAY[100]}
      contentStyle={styles.container}
      title="Mangas">
      <Typography.AgrandirBold
        size={FontSize.XXL}
        alignment={FontAlignment.CENTER}
        color={FontColor.WHITE}
        style={styles.textTitle}>
        {'Mangas'}
      </Typography.AgrandirBold>
    </ViewBase>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.ORANGE,
    paddingHorizontal: gridUnits(2),
    paddingVertical: gridUnits(3),
  },
  textTitle: {
    marginBottom: gridUnits(8),
  },
})
