import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import ViewBase from '../../components/ViewBase'
import { FontColor, FontSize, Typography } from '../../components/Typography'
import { COLORS } from '../../constants/colors'
import {
  GinoFlowScreen,
  GinoStackParamList,
} from '../../navigation/GinoStack/GinoFlowScreen'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { gridUnits } from '../../utils/dimensions'
import { ListProjectResponse } from '../../models/Gino'
import { IMAGES } from '../../constants/images'
import { ProyectListItem } from './components/ProyectListItem'

export const dataProfiles: ListProjectResponse[] = [
  {
    name: 'Gino',
    iconName: IMAGES.drawer.oneProfile,
    iconColor: COLORS.CYAN,
    route: GinoFlowScreen.HOME_NETFLIX,
    preferences: [
      {
        movieName: 'Deadpool & Wolverine',
        isLike: true,
        movieTime: '',
        imageMovie: IMAGES.drawer.dead,
        link: 'https://www.youtube.com/watch?v=uDzfa0w86Vw',
        idMovie: 1,
      },
      {
        movieName: 'Joker 2',
        isLike: false,
        movieTime: '',
        imageMovie: IMAGES.drawer.joker,
        link: 'https://www.youtube.com/watch?v=_uBwHBKP76c',
        idMovie: 2,
      },
    ],
  },
  {
    name: 'May',
    iconName: IMAGES.drawer.twoProfile,
    iconColor: COLORS.CYAN,
    route: GinoFlowScreen.HOME_NETFLIX,
    preferences: [
      {
        movieName: 'Deadpool & Wolverine',
        isLike: true,
        movieTime: '',
        imageMovie: IMAGES.drawer.dead,
        link: 'https://www.youtube.com/watch?v=uDzfa0w86Vw',
        idMovie: 1,
      },
      // {
      //   movieName: 'GUASON 2',
      //   isLike: false,
      //   movieTime: '',
      //   imageMovie: IMAGES.drawer.joker,
      //   link: 'https://www.youtube.com/watch?v=_uBwHBKP76c',
      //   idMovie: 2,
      // },
    ],
  },
  {
    name: 'Alison',
    iconName: IMAGES.drawer.tresProfile,
    iconColor: COLORS.CYAN,
    route: GinoFlowScreen.NETFLIX,
  },
  {
    name: 'Nicol',
    iconName: IMAGES.drawer.fourProfile,
    iconColor: COLORS.CYAN,
    route: GinoFlowScreen.NETFLIX,
  },
  {
    name: 'Mirella',
    iconName: IMAGES.drawer.fiveProfile,
    iconColor: COLORS.CYAN,
    route: GinoFlowScreen.NETFLIX,
  },
]

type ChooseUserProps = StackScreenProps<GinoStackParamList, 'CHOOSE_USER'>
export const ChooseUser: FC<ChooseUserProps> = ({ navigation }) => {
  const goToRouteSelectionProfile = (data: ListProjectResponse) => {
    if (data) {
      navigation.push(data.route, {
        ginoFlow: {
          selectTrailer: data,
        },
      })
    }
  }
  return (
    <ViewBase
      navigation={navigation}
      contentStyle={styles.container}
      title="ChooseUser">
      <View style={styles.textContainer}>
        <Typography.AgrandirBold
          size={FontSize.BASE}
          color={FontColor.WHITE}
          style={styles.textTitle}>
          {'Quién está viendo ahora?'}
        </Typography.AgrandirBold>

        <TouchableOpacity style={styles.editText}>
          <Typography.AgrandirBold size={FontSize.BASE} color={FontColor.WHITE}>
            {'Editar'}
          </Typography.AgrandirBold>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}></View>
      <FlatList
        data={dataProfiles}
        numColumns={2}
        keyExtractor={(_, index) => String(index)}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <ProyectListItem
            data={item}
            isDisabled={false}
            onPress={goToRouteSelectionProfile}
          />
        )}
      />
    </ViewBase>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
    flex: 1,
    padding: gridUnits(2),
  },
  editText: {
    position: 'absolute',
    right: -gridUnits(0.1),
  },
  flatListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {},
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  textTitle: {
    textAlign: 'center',
  },
})
