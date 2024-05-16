import {
  ColorValue,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import React, { FC } from 'react'
import { FontColor, FontSize, Typography } from '../Typography'
import { gridUnits } from '../../utils/dimensions'
import { COLORS } from '../../constants/colors'

type DrawerItemProps = {
  onPress?: () => void
  label?: string
  labelColor: FontColor
  iconName?: ImageSourcePropType
  style?: ViewStyle
  iconColor?: ColorValue
  isActive?: boolean
}

const DrawerItem: FC<DrawerItemProps> = ({
  onPress,
  label,
  labelColor,
  iconName,
  style,
  iconColor,
  isActive,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.optionsDrawer, style]}>
      {iconName && (
        <Image
          source={iconName}
          style={[
            styles.iconStyle,
            { tintColor: isActive ? COLORS.PRIMARY_GREEN : iconColor },
          ]}
        />
      )}
      <Typography.MontserratSemiBold
        size={FontSize.MD}
        color={isActive ? FontColor.GREEN : labelColor}>
        {label}
      </Typography.MontserratSemiBold>
    </TouchableOpacity>
  )
}

export default DrawerItem

const styles = StyleSheet.create({
  iconStyle: {
    alignSelf: 'center',
    marginRight: gridUnits(1.25),
    maxHeight: gridUnits(2.5),
    maxWidth: gridUnits(2.5),
  },
  optionsDrawer: {
    flexDirection: 'row',
    marginLeft: gridUnits(2),
  },
})
