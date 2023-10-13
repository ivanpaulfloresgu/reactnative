//
import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View } from 'react-native'
import { ParamListBase } from '@react-navigation/native'

type HomeProps = StackScreenProps<ParamListBase>

const Home: FC<HomeProps> = ({ navigation }) => {
  return <View></View>
}

export default Home
