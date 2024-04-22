import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LeoFlowScreen, LeoStackParamList } from './LeoFlowScreen'
import { Play } from '../../views/leo'
import { PlaySection } from '../../views/leo/PlaySection'

const StackLeo = createStackNavigator<LeoStackParamList>()
export const LeoStack = () => {
  return (
    <StackLeo.Navigator screenOptions={{ headerShown: false }}>
      <StackLeo.Screen name={LeoFlowScreen.PLAY} component={Play} />
      <StackLeo.Screen
        name={LeoFlowScreen.PLAY_SECTION}
        component={PlaySection}
      />
    </StackLeo.Navigator>
  )
}
