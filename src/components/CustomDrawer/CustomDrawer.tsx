import React, { FC, useState } from 'react'
import { COLORS } from '../../constants/colors'
import DrawerItem from './DrawerItem'
import { useAuthContext } from '../../hooks/useAuthContext'
import { gridUnits, widthPercent } from '../../utils/dimensions'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { FontColor, FontSize, Typography } from '../../components/Typography'
import { DrawerSection } from './DrawerSection'
import { IMAGES } from '../../constants/images'
import { DrawerItemName } from '../../models/Drawer'
import { mapDrawer } from '../../utils/mapper'
import { DrawerActions, ParamListBase } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import ViewBase from '../ViewBase'
type CustomDrawerProps = StackScreenProps<ParamListBase>

const CustomDrawer: FC<CustomDrawerProps> = ({ navigation }) => {
  //const [activeItem, setActiveItem] = useState<string | null>(null)
  const { setIsLogged } = useAuthContext()

  const handleLogout = () => {
    setIsLogged(false)
  }

  // const goToNextView = (vista: DrawerItemName) => {
  //   if (mapDrawer[vista]) {
  //     navigation.push(mapDrawer[vista])
  //   }
  //   setActiveItem(vista)
  //   navigation.dispatch(DrawerActions.closeDrawer)
  // }

  return (
    <ViewBase backgroundColor={COLORS.PRIMARY_BLUE}>
      <ScrollView>
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
            <DrawerSection title={'IVAN'}>
              <DrawerItem
                label={'Animaciones'}
                iconName={{
                  uri: 'https://ih1.redbubble.net/image.1203345664.2260/raf,360x360,075,t,fafafa:ca443f4786.jpg',
                }}
                onPress={() => null}
                labelColor={FontColor.NEUTRAL_700}
                // style={{
                //   marginLeft: gridUnits(1),
                // }}
              />
            </DrawerSection>

            <DrawerSection title={'GINO'}></DrawerSection>

            <DrawerSection title={'JAHYR'}></DrawerSection>
            <DrawerItem
              iconName={IMAGES.drawer.next_icon}
              label="Cerrar sesión"
              labelColor={FontColor.NEUTRAL_700}
              onPress={handleLogout}
              style={styles.logoutButton}
            />
          </View>
        </View>
      </ScrollView>
    </ViewBase>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    width: widthPercent(1),
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: gridUnits(2),
    width: widthPercent(0.75),
  },

  logoutButton: {
    alignSelf: 'center',
    marginVertical: gridUnits(5),
  },
})
