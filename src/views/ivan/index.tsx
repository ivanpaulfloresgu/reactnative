import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import {
  IvanFlowScreen,
  IvanStackParamList,
} from '../../navigation/IvanStack/IvanFlowScreen'
import ViewBase from '../../components/ViewBase'
import { FlatList } from 'react-native'
import { FontSize, Typography } from '../../components/Typography'
import { COLORS } from '../../constants/colors'
import { gridUnits } from '../../utils/dimensions'
import { ListItem } from './components/ListItem'
import { dataIvanList } from '../../utils/constants'

type PracticeProps = StackScreenProps<IvanStackParamList, 'PRACTICE'>
export const Practice: FC<PracticeProps> = ({ navigation }) => {
  const goToHome = () => {
    navigation.pop()
  }
  const goToRouteSelection = (route: IvanFlowScreen) => {
    navigation.push(route)
  }
  return (
    <ViewBase
      showHeader
      showRightButton
      showLeftButton
      rightActionButton={goToHome}
      backgroundColor={COLORS.GRAY[100]}
      contentStyle={{ marginHorizontal: gridUnits(2), marginTop: gridUnits(5) }}
      title="Lista de Ivan">
      <Typography.AgrandirRegular
        size={FontSize.XXL}
        style={{ marginBottom: gridUnits(2) }}>
        {'Proyectos:'}
      </Typography.AgrandirRegular>
      <FlatList
        data={dataIvanList}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <ListItem item={item} onPress={goToRouteSelection} />
        )}
      />
    </ViewBase>
  )
}
