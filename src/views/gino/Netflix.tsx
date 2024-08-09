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

type NetflixProps = StackScreenProps<GinoStackParamList, 'NETFLIX'>
export const Netflix: FC<NetflixProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.push(GinoFlowScreen.CHOOSE_USER)
    }, 2000)
    return () => clearTimeout(timer)
  }, [navigation])

  return (
    <ViewBase
      navigation={navigation}
      contentStyle={styles.container}
      title="Netflix">
      <View style={styles.centeredContent}>
        <Typography.AgrandirBold
          size={FontSize.XXL}
          alignment={FontAlignment.CENTER}
          color={FontColor.RED}
          style={styles.textTitle}>
          {'Netflix'}
        </Typography.AgrandirBold>
      </View>
    </ViewBase>
  )
}
const styles = StyleSheet.create({
  centeredContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: COLORS.BLACK,
    flex: 1,
  },
  textTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
})
