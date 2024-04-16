import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { IvanStackParamList } from '../../navigation/IvanStack/IvanFlowScreen'
import ViewBase from '../../components/ViewBase'

type PracticeProps = StackScreenProps<IvanStackParamList, 'PRACTICE'>
export const Practice: FC<PracticeProps> = ({ navigation }) => {
  const goToHome = () => {
    navigation.pop()
  }
  return (
    <ViewBase
      showHeader
      showRightButton
      rightActionButton={goToHome}
      title="hola"
    />
  )
}
