import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import ViewBase from '../../components/ViewBase'
import {
  FontAlignment,
  FontColor,
  FontSize,
  Typography,
} from '../../components/Typography'
import { COLORS } from '../../constants/colors'
import { gridUnits } from '../../utils/dimensions'
import {
  GinoFlowScreen,
  GinoStackParamList,
} from '../../navigation/GinoStack/GinoFlowScreen'
import { FlatList, StyleSheet, View } from 'react-native'
import { ProyectListItem } from './components/ProyectListItem'
import { ListProjectResponse } from '../../models/Gino'
import { IMAGES } from '../../constants/images'

export const dataPrueba: ListProjectResponse[] = [
  {
    name: 'Netflix',
    iconName: IMAGES.drawer.netflixIcon,
    iconColor: COLORS.CYAN,
    route: GinoFlowScreen.NETFLIX,
  },
  {
    name: 'Mangas',
    iconName: IMAGES.drawer.kaidenIcon,
    iconColor: COLORS.CYAN,
    route: GinoFlowScreen.MANGAS,
  },
  {
    name: 'Mangas',
    iconName: IMAGES.drawer.netflixIcon,
    iconColor: COLORS.CYAN,
    route: GinoFlowScreen.NETFLIX,
  },
]

type ProjectListProps = StackScreenProps<GinoStackParamList, 'PROJECT_LIST'>
export const ProjectList: FC<ProjectListProps> = ({ navigation }) => {
  const goToHome = () => {
    navigation.pop()
  }
  const goToRouteSelection = (route: GinoFlowScreen) => {
    navigation.push(route)
  }

  return (
    <ViewBase
      showRightButton
      showLeftButton
      rightActionButton={goToHome}
      navigation={navigation}
      backgroundColor={COLORS.GRAY[100]}
      contentStyle={styles.container}
      title="Gino List">
      <Typography.AgrandirBold
        size={FontSize.XXL}
        alignment={FontAlignment.CENTER}
        color={FontColor.WHITE}
        style={{ marginBottom: gridUnits(8) }}>
        {'Projects list:'}
      </Typography.AgrandirBold>
      <FlatList
        data={dataPrueba}
        numColumns={2}
        keyExtractor={(_, index) => String(index)}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <ProyectListItem data={item} onPress={goToRouteSelection} />
        )}
      />
    </ViewBase>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
    paddingHorizontal: gridUnits(2),
    paddingVertical: gridUnits(3),
  },
  flatListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
