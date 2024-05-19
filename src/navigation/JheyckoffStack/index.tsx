import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Play } from '../../views/leo'
import { PlaySection } from '../../views/leo/PlaySection'
import { VideoSection } from '../../views/leo/VideoSection'
import { GifSection } from '../../views/leo/GifSection'
import { AudioSection } from '../../views/leo/AudioSection'
import { RegisterSection } from '../../views/leo/RegisterSection'
import { JheyckoffFlowScreen, JheyckoffStackParamList } from './JheyckoffFlowScreen'
import { xbox } from '../../views/jheyckoff'

const StackJheyckoff = createStackNavigator<JheyckoffStackParamList>()
export const JheyckoffStack = () => {
  return (
    <StackJheyckoff.Navigator screenOptions={{ headerShown: false }}>
      <StackJheyckoff.Screen name={JheyckoffFlowScreen.XBOX} component={xbox} />
    </StackJheyckoff.Navigator>
  )
}