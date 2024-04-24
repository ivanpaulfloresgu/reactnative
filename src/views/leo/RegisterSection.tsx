import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { LeoStackParamList } from '../../navigation/LeoStack/LeoFlowScreen'
import ViewBase from '../../components/ViewBase'
import { COLORS } from '../../constants/colors'
type RegisterProps = StackScreenProps<LeoStackParamList, 'REGISTER_SECTION'>
export const RegisterSection: FC<RegisterProps> = ({ navigation }) => {
  return (
    <ViewBase
      style={{ flex: 1 }}
      showHeader
      showRightButton
      showLeftButton
      navigation={navigation}
      backgroundColor={COLORS.GRAY[100]}
      title="Registro"></ViewBase>
  )
}
