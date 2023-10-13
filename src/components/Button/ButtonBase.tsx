import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ColorValue,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native'
import React, { FC } from 'react'
import { FontColor, FontFamily, FontSize, Typography } from '../Typography'
import { gridUnits } from '../../utils/dimensions'
import { COLORS } from '../../constants/colors'

type ButtonBaseProps = TouchableOpacityProps & {
  label: string
  labelColor: FontColor
  labelStyle?: TextStyle
  style?: ViewStyle
  width?: number
  height?: number
  isLoading?: boolean
  iconColor?: ColorValue
  backgroundColor?: ColorValue
}

type ButtonBaseType = FC<ButtonBaseProps> & {
  OutLine: FC<ButtonBaseLineProps>
  OutFill: FC<ButtonBaseFillProps>
}

export const ButtonBase: ButtonBaseType = ({
  label,
  labelColor,
  labelStyle,
  style,
  width,
  height,
  isLoading = false,
  iconColor = COLORS.PRIMARY_BLUE,
  backgroundColor = COLORS.WHITE,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        { backgroundColor: backgroundColor },
        styles.container,
        style,
        {
          width,
          height,
        },
      ]}
      {...props}>
      {isLoading && (
        <ActivityIndicator
          size={'small'}
          color={iconColor}
          style={{
            marginRight: gridUnits(1),
          }}
        />
      )}
      <Typography.AgrandirRegular
        size={FontSize.LG}
        style={[styles.textButton, labelStyle]}
        color={labelColor}>
        {label}
      </Typography.AgrandirRegular>
    </TouchableOpacity>
  )
}
type ButtonBaseLineProps = ButtonBaseProps & {
  borderLineColor: ColorValue
  containerStyle?: ViewStyle
}
const ButtonBaseOutLine: FC<ButtonBaseLineProps> = props => (
  <ButtonBase
    {...props}
    labelColor={props.disabled ? FontColor.GRAY : props.labelColor}
    labelStyle={{
      fontFamily: FontFamily.AGRANDIR_REGULAR,
    }}
    style={{
      borderColor: props.disabled ? COLORS.MEDIUM_GRAY : props.borderLineColor,
      ...styles.containerOutline,
      ...props.containerStyle,
    }}
  />
)

type ButtonBaseFillProps = ButtonBaseProps & {
  fillColor: ColorValue
  isLoading?: boolean
  containerStyle?: ViewStyle
}
const ButtonBaseOutFill: FC<ButtonBaseFillProps> = props => (
  <ButtonBase
    {...props}
    style={{
      backgroundColor: props.disabled ? COLORS.MEDIUM_GRAY : props.fillColor,
      ...styles.containerOutfill,
      ...props.containerStyle,
    }}
    isLoading={props.isLoading}
  />
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
  },
  containerOutfill: {
    borderRadius: gridUnits(2),
    padding: gridUnits(1),
  },
  containerOutline: {
    borderRadius: gridUnits(2),
    borderWidth: 1,
    paddingVertical: gridUnits(0.8),
  },
  textButton: {
    textAlign: 'center',
  },
})

ButtonBase.OutFill = ButtonBaseOutFill
ButtonBase.OutLine = ButtonBaseOutLine
