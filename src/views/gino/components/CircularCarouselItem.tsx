import React, { FC } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { gridUnits } from '../../../utils/dimensions'
import { preferencesList } from '../../../models/Gino'
import {
  FontAlignment,
  FontColor,
  FontSize,
  Typography,
} from '../../../components/Typography'

type CircularCarouselItemProps = {
  data: preferencesList
  onPress?: (op: preferencesList) => void
}

export const CircularCarouselItem: FC<CircularCarouselItemProps> = ({
  data,
  onPress,
}) => {
  const { movieName, imageMovie } = data || {}

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress && onPress(data)}>
      <Image source={imageMovie} style={styles.icon} />
      <View style={styles.textContainer}>
        <Typography.MontserratBold
          size={FontSize.SM}
          alignment={FontAlignment.CENTER}
          color={FontColor.WHITE}
          lineHeight={FontSize.SM}
          style={styles.movieTitle}>
          {movieName}
        </Typography.MontserratBold>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    height: 100,
    justifyContent: 'center',
    marginRight: gridUnits(1),
    marginVertical: gridUnits(1),
    width: 100,
  },
  icon: {
    borderRadius: 50,
    height: '100%',
    resizeMode: 'cover',
    width: '100%',
  },
  movieTitle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    textTransform: 'uppercase',
  },
  textContainer: {
    alignItems: 'center',
    bottom: -12,
    position: 'absolute',
    width: '100%',
  },
})
