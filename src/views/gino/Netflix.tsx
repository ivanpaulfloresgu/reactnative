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

type NetflixProps = StackScreenProps<GinoStackParamList, 'NETFLIX'>
export const Netflix: FC<NetflixProps> = ({ navigation }) => {
  return (
    <ViewBase
      showHeader
      showRightButton
      showLeftButton
      navigation={navigation}
      backgroundColor={COLORS.GRAY[100]}
      contentStyle={styles.container}
      title="Netflix">
      <Typography.AgrandirBold
        size={FontSize.XXL}
        alignment={FontAlignment.CENTER}
        color={FontColor.WHITE}
        style={styles.textTitle}>
        {'Netflix'}
      </Typography.AgrandirBold>
    </ViewBase>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
    paddingHorizontal: gridUnits(2),
    paddingVertical: gridUnits(3),
  },
  textTitle: {
    marginBottom: gridUnits(8),
  },
})
