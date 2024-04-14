//
import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'
import ViewBase from '../../components/ViewBase'
import { Typography } from '../../components/Typography'

type HomeProps = StackScreenProps<ParamListBase>

const Home: FC<HomeProps> = ({ navigation }) => {
  return (
    <ViewBase title={'hola0'}>
      <Typography.AgrandirRegular>{'Probandin'}</Typography.AgrandirRegular>
    </ViewBase>
  )
}

export default Home
