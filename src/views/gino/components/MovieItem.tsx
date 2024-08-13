import React, { FC } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import {
  heightPercent,
  widthPercent,
} from '../../../utils/dimensions'
import { Character,  } from '../../../models/Gino'
import {
  FontColor,
  FontSize,
  Typography,
} from '../../../components/Typography'
import { COLORS } from '../../../constants/colors'

type MovieItemProps = {
  data: Character
  onPress?: (ch:Character ) => void
}

export const MovieItem: FC<MovieItemProps> = ({ data, onPress }) => {
  const { image, name } = data
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress && onPress(data) }>
      <Image source={{ uri: image }} style={styles.icon} />
      <Typography.AgrandirBold size={FontSize.BASE} color={FontColor.WHITE}>
        {name}
      </Typography.AgrandirBold>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.CYAN,
    borderWidth: 1,
    flex: 1,
    height: heightPercent(0.15),
    width: widthPercent(0.25),
  },
  icon: {
    height: '100%',
    resizeMode: 'cover',
    width: '100%',
  },
})
