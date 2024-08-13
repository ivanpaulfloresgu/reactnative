import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import {
  FontAlignment,
  FontColor,
  FontSize,
  Typography,
} from '../../components/Typography'
import { GinoStackParamList } from '../../navigation/GinoStack/GinoFlowScreen'
import { Image, StyleSheet, View } from 'react-native'
import { COLORS } from '../../constants/colors'
import { gridUnits } from '../../utils/dimensions'

type MovieInformationProps = StackScreenProps<
  GinoStackParamList,
  'MOVIE_INFORMATION'
>
export const MovieInformation: FC<MovieInformationProps> = ({
  navigation,
  route,
}) => {
  const selectMovieInformation = route.params.ginoFlow?.selectMovieInformation
  console.log('selectMovieInformation', selectMovieInformation)
  const { image ,name} = selectMovieInformation || {}

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.imageConainer} />

      <View style={styles.midContainer}>
        <Typography.AgrandirBold size={FontSize.BASE} color={FontColor.WHITE}>
          {name}
        </Typography.AgrandirBold>


      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
    flex: 1,
  },
  imageConainer: {
    height: '30%',
    marginBottom: gridUnits(1),
    resizeMode: 'cover',
    width: '100%',
  },
  midContainer: {
    paddingHorizontal: gridUnits(1),
  },
})
