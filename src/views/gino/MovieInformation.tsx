import React, { FC, useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import ViewBase from '../../components/ViewBase'
import {
  FontAlignment,
  FontColor,
  FontSize,
  Typography,
} from '../../components/Typography'
import { COLORS } from '../../constants/colors'
import {
  GinoFlowScreen,
  GinoStackParamList,
} from '../../navigation/GinoStack/GinoFlowScreen'
import { StyleSheet, View } from 'react-native'

type MovieInformationProps = StackScreenProps<GinoStackParamList, 'NETFLIX'>
export const MovieInformation: FC<MovieInformationProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Typography.AgrandirBold
        size={FontSize.XXL}
        alignment={FontAlignment.CENTER}
        color={FontColor.RED}>
        {'ESTO VA SER LA VISA INFORMATIVA CUANDO LE DE CLICK A LOS VIDEOS '}
      </Typography.AgrandirBold>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
