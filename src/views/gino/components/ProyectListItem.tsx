import React, { FC } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import {
  gridUnits,
  heightPercent,
  widthPercent,
} from '../../../utils/dimensions'

import { GinoFlowScreen } from '../../../navigation/GinoStack/GinoFlowScreen'
import { ListProjectResponse } from '../../../models/Gino'

type ProyectListItemProps = {
  data: ListProjectResponse
  onPress: (route: GinoFlowScreen) => void
}

export const ProyectListItem: FC<ProyectListItemProps> = ({
  data,
  onPress,
}) => {
  const { name, iconName, iconColor, route } = data
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => onPress(route)}>
      <View style={[styles.circle, { backgroundColor: iconColor }]}>
        <Image source={iconName} style={styles.icon} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
  },
  circle: {
    alignItems: 'center',
    borderRadius: gridUnits(2),
    justifyContent: 'center',
    marginBottom: gridUnits(4),
    marginHorizontal: gridUnits(3),
    width: gridUnits(11),
  },
  icon: {
    height: heightPercent(0.11),
    width: widthPercent(0.3),
  },
})
