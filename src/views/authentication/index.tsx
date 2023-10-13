import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { AuthStackParamList } from '../../navigation/AuthStack/AuthFlowScreen'
import { Text, View } from 'react-native'
import { Typography } from '../../components/Typography'

type AuthenticationProps = StackScreenProps<AuthStackParamList, 'LOGIN'>

const Authentication: FC<AuthenticationProps> = ({ navigation }) => {
  return (
    <View>
      <Typography.Caption>{'prueba'}</Typography.Caption>
    </View>
  )
}

export default Authentication
