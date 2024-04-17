import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import {
  IvanFlowScreen,
  IvanStackParamList,
} from '../../navigation/IvanStack/IvanFlowScreen'
import ViewBase from '../../components/ViewBase'
import { TouchableOpacity } from 'react-native'
import { Typography } from '../../components/Typography'

type PracticeProps = StackScreenProps<IvanStackParamList, 'PRACTICE'>
export const Practice: FC<PracticeProps> = ({ navigation }) => {
  const goToHome = () => {
    navigation.pop()
  }
  const goToSignatureSection = () => {
    navigation.push(IvanFlowScreen.SIGNATURE_SECTION)
  }
  return (
    <ViewBase
      showHeader
      showRightButton
      rightActionButton={goToHome}
      title="hola">
      <TouchableOpacity onPress={goToSignatureSection}>
        <Typography.AgrandirRegular>
          {'SignatureScreen'}
        </Typography.AgrandirRegular>
      </TouchableOpacity>
    </ViewBase>
  )
}
