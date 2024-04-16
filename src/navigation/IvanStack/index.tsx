import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IvanFlowScreen, IvanStackParamList } from './IvanFlowScreen'
import { Practice } from '../../views/ivan'

const Stack = createStackNavigator<IvanStackParamList>()
export const IvanStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={IvanFlowScreen.PRACTICE} component={Practice} />
    </Stack.Navigator>
  )
}
