import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { DrawerActions, ParamListBase } from '@react-navigation/native'
import ViewBase from '../../components/ViewBase'
import {
  FontColor,
  FontSize,
  FontWeight,
  Typography,
} from '../../components/Typography'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { gridUnits, heightPercent } from '../../utils/dimensions'
import { COLORS } from '../../constants/colors'
import { MenuSvg } from '../../svg-components/MenuSvg'

type HomeProps = StackScreenProps<ParamListBase>

const Home: FC<HomeProps> = ({ navigation }) => {
  const handleToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer())
  }
  return (
    <ViewBase contentStyle={styles.container}>
      <View style={styles.nameContainer}>
        <Typography.LatoSemiBold
          lineHeight={FontSize.MD}
          color={FontColor.WHITE}
          style={{ fontWeight: FontWeight.W_800 }}>
          {'Buenos Dias especial.\nUser'}
        </Typography.LatoSemiBold>
        <TouchableOpacity onPress={handleToggleDrawer} style={styles.circle}>
          <MenuSvg width={26} height={26} />
        </TouchableOpacity>
      </View>

      <View style={styles.carouselContainer}></View>

      <Typography.LatoSemiBold
        lineHeight={FontSize.MD}
        color={FontColor.WHITE}
        style={styles.label}>
        {'health metric'}
      </Typography.LatoSemiBold>
    </ViewBase>
  )
}

export default Home

const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: gridUnits(4),
    // flex: 1,
    borderWidth: 1,
    height: heightPercent(0.26),
    padding: gridUnits(2),
  },
  circle: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    padding: gridUnits(0.5),
  },
  container: {
    backgroundColor: COLORS.BLACK,
    flex: 1,
    padding: gridUnits(3),
  },
  label: {
    fontWeight: FontWeight.W_800,
    marginTop: gridUnits(2),
    textTransform: 'uppercase',
  },
  nameContainer: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: gridUnits(2),
  },
})
