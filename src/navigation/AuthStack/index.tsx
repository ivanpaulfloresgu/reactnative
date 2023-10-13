import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthFlowScreen, AuthStackParamList } from './AuthFlowScreen'
import Authentication from '../../views/authentication'

const Stack = createStackNavigator<AuthStackParamList>()
export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AuthFlowScreen.LOGIN} component={Authentication} />
    </Stack.Navigator>
  )
}
