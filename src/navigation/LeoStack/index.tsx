import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LeoFlowScreen, LeoStackParamList } from './LeoFlowScreen'
import { Play } from '../../views/leo'
import { PlaySection } from '../../views/leo/PlaySection'
import { VideoSection } from '../../views/leo/VideoSection'
import { GifSection } from '../../views/leo/GifSection'
import { AudioSection } from '../../views/leo/AudioSection'
import { RegisterSection } from '../../views/leo/RegisterSection'

const StackLeo = createStackNavigator<LeoStackParamList>()
export const LeoStack = () => {
  return (
    <StackLeo.Navigator screenOptions={{ headerShown: false }}>
      <StackLeo.Screen name={LeoFlowScreen.PLAY} component={Play} />
      <StackLeo.Screen
        name={LeoFlowScreen.PLAY_SECTION}
        component={PlaySection}
      />
      <StackLeo.Screen
        name={LeoFlowScreen.VIDEO_SECTION}
        component={VideoSection}
      />
      <StackLeo.Screen
        name={LeoFlowScreen.GIF_SECTION}
        component={GifSection}
      />
      <StackLeo.Screen
        name={LeoFlowScreen.AUDIO_SECTION}
        component={AudioSection}
      />
      <StackLeo.Screen
        name={LeoFlowScreen.REGISTER_SECTION}
        component={RegisterSection}
      />
    </StackLeo.Navigator>
  )
}
