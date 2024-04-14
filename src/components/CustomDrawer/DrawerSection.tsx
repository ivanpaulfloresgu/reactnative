import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'
import { gridUnits } from '../../utils/dimensions'
import { FontColor, FontSize, Typography } from '../Typography'
export type DrawerSectionProps = ViewProps & {
  title: string
}
export const DrawerSection: FC<DrawerSectionProps> = ({ title, children }) => {
  return (
    <View style={{ marginTop: gridUnits(2) }}>
      <Typography.AgrandirRegular
        size={FontSize.MD}
        style={{ marginBottom: gridUnits(1) }}
        color={FontColor.GREEN}>
        {title}
      </Typography.AgrandirRegular>
      {children}
    </View>
  )
}
