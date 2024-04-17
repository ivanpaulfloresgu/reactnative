import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IvanFlowScreen, IvanStackParamList } from './IvanFlowScreen'
import { Practice } from '../../views/ivan'
import { SignatureSection } from '../../views/ivan/SignatureSection'

const Stack = createStackNavigator<IvanStackParamList>()
export const IvanStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={IvanFlowScreen.PRACTICE} component={Practice} />
      <Stack.Screen
        name={IvanFlowScreen.SIGNATURE_SECTION}
        component={SignatureSection}
      />
    </Stack.Navigator>
  )
}
