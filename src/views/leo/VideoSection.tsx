import React, { FC, useRef } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { LeoStackParamList } from '../../navigation/LeoStack/LeoFlowScreen'
import ViewBase from '../../components/ViewBase'
import { COLORS } from '../../constants/colors'
import Video from 'react-native-video'
import VideoRef from 'react-native-video'
import { StyleSheet } from 'react-native'

type VideoProps = StackScreenProps<LeoStackParamList, 'VIDEO_SECTION'>
export const VideoSection: FC<VideoProps> = ({ navigation }) => {
  const VideoRef = useRef<VideoRef>(null)
  const background = require('../../assets/video/leo/jacinta.mp4')

  return (
    <ViewBase
      style={{ flex: 1 }}
      showHeader
      showRightButton
      showLeftButton
      navigation={navigation}
      backgroundColor={COLORS.GRAY[100]}
      title="video">
      <Video
        source={background}
        ref={VideoRef}
        style={styles.backgroundVideo}
        controls={true}
      />
    </ViewBase>
  )
}
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'relative',
    top: 10,
    left: 80,
    bottom: 0,
    right: 10,
    height: 240,
    width: 240,
  },
})
