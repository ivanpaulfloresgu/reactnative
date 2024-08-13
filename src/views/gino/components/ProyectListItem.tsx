import React, { FC } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import {
  gridUnits,
  heightPercent,
  widthPercent,
} from '../../../utils/dimensions'

import { GinoFlowScreen } from '../../../navigation/GinoStack/GinoFlowScreen'
import { ListProjectResponse } from '../../../models/Gino'
import {
  FontAlignment,
  FontColor,
  FontSize,
  Typography,
} from '../../../components/Typography'

type ProyectListItemProps = {
  data: ListProjectResponse
  onPress?: (data: ListProjectResponse) => void
  isDisabled?: boolean
  showEdit?: boolean
}

export const ProyectListItem: FC<ProyectListItemProps> = ({
  data,
  onPress,
  isDisabled,
  showEdit = false,
}) => {
  const { name, iconName, iconColor, route } = data
  return (
    <>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => (onPress ? onPress(data) : undefined)}>
        {isDisabled ? (
          <View style={[styles.circle, { backgroundColor: iconColor }]}>
            <Image source={iconName} style={styles.icon} />
            {showEdit && (
              <Typography.AgrandirBold
                size={FontSize.BASE}
                color={FontColor.WHITE}>
                {'Editar'}
              </Typography.AgrandirBold>
            )}
          </View>
        ) : (
          <View>
            <Image source={iconName} style={styles.icon} />
            <Typography.AgrandirBold
              size={FontSize.BASE}
              color={FontColor.WHITE}
              alignment={FontAlignment.CENTER}>
              {name}
            </Typography.AgrandirBold>
          </View>
        )}
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    marginVertical: gridUnits(1),
  },
  circle: {
    alignItems: 'center',
    borderRadius: gridUnits(2),
    justifyContent: 'center',
    marginBottom: gridUnits(4),
    marginHorizontal: gridUnits(2),
  },
  icon: {
    alignItems: 'center',
    borderRadius: gridUnits(1),
    height: heightPercent(0.13),
    justifyContent: 'center',
    marginBottom: gridUnits(1),
    marginHorizontal: gridUnits(1.5),
    resizeMode: 'contain',
    width: widthPercent(0.3),
  },
})
