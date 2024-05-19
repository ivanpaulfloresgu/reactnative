import {
  StyleSheet,
  View,
  TextInputProps,
  TextInput,
  ViewStyle,
  ColorValue,
  TextStyle,
  Image,
  Platform,
} from 'react-native'
import React, { FC, useState } from 'react'
import { gridUnits } from '../utils/dimensions'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { FontColor, FontFamily, FontSize } from './Typography'
import { COLORS } from '../constants/colors'
import { Value } from 'react-native-reanimated'
export type TextFieldProps = TextInputProps & {
  label?: string
  hideLabel?: boolean
  labelColor?: ColorValue
  inputStyle?: ViewStyle
  textFieldStyle?: TextStyle
  textFieldContainerStyle?: ViewStyle
  showVisibility?: boolean
  hasError?: boolean
  errorText?: string
  showIcon?: boolean
  iconImage?: string
  iconImageColor?: ColorValue
}

const TextField: FC<TextFieldProps> = ({
  label,
  hideLabel = false,
  showVisibility = false,
  labelColor,
  inputStyle,
  textFieldContainerStyle,
  textFieldStyle,
  showIcon = true,
  iconImage,
  iconImageColor = COLORS.NEUTRAL[600],
  ...props
}) => {
  const [isTextVisible, setIsTextVisible] = useState(showVisibility)
  const iconName = !isTextVisible ? 'md-eye-outline' : 'md-eye-off-outline'
  const handleTextVisibility = () => {
    setIsTextVisible(!isTextVisible)
  }
  return (
    <View style={[styles.textFieldContainer, textFieldContainerStyle]}>
      <View style={[styles.inputContainer, inputStyle]}>
        {showIcon && (
          <Image source={{ uri: iconImage }} style={styles.iconInput} />
        )}

        <TextInput
          style={[styles.textField, textFieldStyle]}
          secureTextEntry={isTextVisible}
          placeholderTextColor={COLORS.MEDIUM_GRAY}
          {...props}
        />
        {showVisibility && (
          <TouchableOpacity onPress={handleTextVisibility}>
            <Icon name={iconName} size={gridUnits(3)} color={iconImageColor} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default TextField

const styles = StyleSheet.create({
  iconInput: {
    height: gridUnits(3),
    marginHorizontal: gridUnits(1),
    resizeMode: 'cover',
    width: gridUnits(3),
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: gridUnits(1),
    flexDirection: 'row',
    marginTop: gridUnits(1),
  },
  textField: {
    color: COLORS.PRIMARY_BLUE,
    flex: 1,
    fontFamily: FontFamily.LATO_REGULAR,
    fontSize: FontSize.BASE,
    paddingVertical: Platform.OS == 'android' ? gridUnits(0.5) : gridUnits(1),
    textDecorationLine: 'none',
  },
  textFieldContainer: {},
})
