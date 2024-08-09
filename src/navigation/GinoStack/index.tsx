import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { GinoFlowScreen, GinoStackParamList } from './GinoFlowScreen'
import { ProjectList } from '../../views/gino'
import { Netflix } from '../../views/gino/Netflix'
import { Mangas } from '../../views/gino/Mangas'
import { ChooseUser } from '../../views/gino/ChooseUser'
import { HomeNetflix } from '../../views/gino/HomeNetflix'

const Stack = createStackNavigator<GinoStackParamList>()
export const GinoStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={GinoFlowScreen.PROJECT_LIST}
        component={ProjectList}
      />
      <Stack.Screen name={GinoFlowScreen.NETFLIX} component={Netflix} />
      <Stack.Screen name={GinoFlowScreen.MANGAS} component={Mangas} />
      <Stack.Screen name={GinoFlowScreen.CHOOSE_USER} component={ChooseUser} />
      <Stack.Screen
        name={GinoFlowScreen.HOME_NETFLIX}
        component={HomeNetflix}
      />
    </Stack.Navigator>
  )
}
