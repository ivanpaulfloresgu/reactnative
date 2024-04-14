import {
  ColorValue,
  SafeAreaView,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native'
import React, { FC } from 'react'
import { COLORS } from '../constants/colors'
import { FontColor, FontSize, Typography } from './Typography'
import { gridUnits, widthPercent } from '../utils/dimensions'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { ParamListBase } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
type ViewBaseProps = ViewProps & {
  title?: string
  showHeader?: boolean
  leftIconButton?: string
  leftActionButton?: () => void
  rightIconButton?: string
  rightActionButton?: () => void
  showLeftButton?: boolean
  showRightButton?: boolean
  navigation?: StackNavigationProp<ParamListBase>
  backgroundColor?: ColorValue
  contentStyle?: ViewStyle
}

const ViewBase: FC<ViewBaseProps> = ({
  children,
  backgroundColor = COLORS.WHITE,
  title,
  showHeader,
  showLeftButton,
  showRightButton,
  leftIconButton = 'chevron-back',
  rightIconButton = 'close',
  navigation,
  leftActionButton = () => navigation?.pop(),
  rightActionButton = () => navigation?.pop(),
  contentStyle,
  ...props
}) => {
  return (
    <SafeAreaView {...props} style={[styles.container, { backgroundColor }]}>
      {showHeader && (
        <View style={styles.headerContainer}>
          {showLeftButton && (
            <TouchableOpacity
              style={styles.containerLeftButton}
              onPress={leftActionButton}>
              <Icon
                name={leftIconButton}
                color={COLORS.PRIMARY_BLUE}
                size={gridUnits(3.5)}
              />
            </TouchableOpacity>
          )}

          <Typography.AgrandirRegular
            style={styles.title}
            size={FontSize.LG}
            color={FontColor.BLUE_100}>
            {title}
          </Typography.AgrandirRegular>
          {showRightButton ? (
            <TouchableOpacity
              style={styles.containerRightButton}
              onPress={rightActionButton}>
              <Icon
                name={rightIconButton}
                color={COLORS.PRIMARY_BLUE}
                size={gridUnits(3.5)}
              />
            </TouchableOpacity>
          ) : (
            <View style={{ width: gridUnits(4) }} />
          )}
        </View>
      )}
      <View style={[styles.content, contentStyle]}>{children}</View>
    </SafeAreaView>
  )
}

export default ViewBase

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLeftButton: {
    marginLeft: gridUnits(2),
    width: gridUnits(4),
  },
  containerRightButton: {
    marginRight: gridUnits(2),
    width: gridUnits(4),
  },
  content: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderBottomLeftRadius: gridUnits(2),
    borderBottomRightRadius: gridUnits(2),
    elevation: 3,
    flexDirection: 'row',
    height: gridUnits(6),
    justifyContent: 'center',
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.4,
    width: widthPercent(1),
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
})
