import React, { FC, useState } from 'react'
import { COLORS } from '../../constants/colors'
import DrawerItem from './DrawerItem'
import { useAuthContext } from '../../hooks/useAuthContext'
import { gridUnits, widthPercent } from '../../utils/dimensions'
import { Image, StyleSheet, View } from 'react-native'
import { FontColor, FontSize, Typography } from '../../components/Typography'
import { IMAGES } from '../../constants/images'
import ViewBase from '../ViewBase'
import { DrawerActions, ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { DrawerItemName } from '../../models/Drawer'
import { mapDrawer } from '../../utils/mapper'
type CustomDrawerProps = StackScreenProps<ParamListBase>

const CustomDrawer: FC<CustomDrawerProps> = ({ navigation }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const { setIsLogged } = useAuthContext()

  const handleLogout = () => {
    setIsLogged(false)
  }

  const goToNextView = (vista: DrawerItemName) => {
    if (mapDrawer[vista]) {
      navigation.push(mapDrawer[vista])
    }
    setActiveItem(vista)
    navigation.dispatch(DrawerActions.closeDrawer)
  }

  return (
    <ViewBase backgroundColor={COLORS.PRIMARY_BLUE}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987722169-VV6ZASHHZNRBJW9X0PLK/Key_Art_02_layeredjpg.jpg?format=1500w',
            }}
            style={{
              width: gridUnits(12),
              height: gridUnits(12),
              borderRadius: gridUnits(12),
            }}
          />

          <View
            style={{
              marginLeft: gridUnits(2),
            }}>
            <Typography.AgrandirRegular
              color={FontColor.WHITE}
              size={FontSize.LG}>
              Hola
            </Typography.AgrandirRegular>
            <Typography.AgrandirBold
              color={FontColor.WHITE}
              size={FontSize.MLG}
              lineHeight={FontSize.SM}>
              {'El más cheroka'}
            </Typography.AgrandirBold>
          </View>
        </View>
        <View style={{ marginTop: gridUnits(1) }}>
          <DrawerItem
            label={'Gino'}
            onPress={() => null}
            labelColor={FontColor.WHITE}
            isActive={activeItem === DrawerItemName.GINO}
          />
          <DrawerItem
            label={'Ivan'}
            onPress={() => goToNextView(DrawerItemName.IVAN)}
            labelColor={FontColor.WHITE}
            isActive={activeItem === DrawerItemName.IVAN}
          />
          <DrawerItem
            label={'Jahyr'}
            onPress={() => null}
            labelColor={FontColor.WHITE}
            isActive={activeItem === DrawerItemName.JAHYR}
          />
          <DrawerItem
            label={'Jheyckoff'}
            onPress={() => null}
            labelColor={FontColor.WHITE}
            isActive={activeItem === DrawerItemName.JHEYCKOFF}
          />
          <DrawerItem
            label={'Leonardo'}
            onPress={() => goToNextView(DrawerItemName.LEONARDO)}
            labelColor={FontColor.WHITE}
            isActive={activeItem === DrawerItemName.LEONARDO}
          />
        </View>
      </View>
      <DrawerItem
        iconName={IMAGES.drawer.next_icon}
        label="Cerrar sesión"
        labelColor={FontColor.WHITE}
        onPress={handleLogout}
        style={styles.logoutButton}
        iconColor={COLORS.WHITE}
      />
    </ViewBase>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginLeft: gridUnits(2),
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: gridUnits(6),
    marginTop: gridUnits(2),
    width: widthPercent(0.75),
  },

  logoutButton: {
    marginLeft: gridUnits(2),
    marginVertical: gridUnits(3),
  },
})
