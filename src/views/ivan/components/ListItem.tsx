import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../../constants/colors'
import { gridUnits } from '../../../utils/dimensions'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { FontSize, Typography } from '../../../components/Typography'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { IvanList } from '../../../models/Ivan'
import { IvanFlowScreen } from '../../../navigation/IvanStack/IvanFlowScreen'

type ListItemProps = {
  item: IvanList
  onPress: (route: IvanFlowScreen) => void
}

export const ListItem: FC<ListItemProps> = ({ item, onPress }) => {
  const { name, iconName, iconColor, route } = item
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(route)}>
      <View style={styles.contentContainer}>
        <FontAwesome
          name="reddit-square"
          color={COLORS.CYAN}
          size={FontSize.LG}
        />
        <View
          style={{
            marginLeft: gridUnits(1.2),
            marginRight: gridUnits(0.7),
          }}>
          <Typography.AgrandirRegular size={FontSize.BASE}>
            {name}
          </Typography.AgrandirRegular>
        </View>
        <FontAwesome5 name={iconName} color={iconColor} size={FontSize.BASE} />
      </View>
      <Entypo name="circle" color={COLORS.CYAN} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.NEUTRAL[400],
    borderRadius: gridUnits(0.9),
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: gridUnits(1),
    padding: gridUnits(1),
  },
  contentContainer: { alignItems: 'center', flexDirection: 'row' },
})
