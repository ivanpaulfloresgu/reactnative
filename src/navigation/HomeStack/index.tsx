import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HomeFlowScreen, HomeStackParamList } from './HomeFlowScreen'
import Home from '../../views/home'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { widthPercent } from '../../utils/dimensions'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator<HomeStackParamList>()

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      //drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: widthPercent(1),
          flex: 1,
        },
      }}>
      <Drawer.Screen name={HomeFlowScreen.HOME} component={Home} />
    </Drawer.Navigator>
  )
}

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={HomeFlowScreen.INITIAL_VIEW}
        component={DrawerStack}
      />
    </Stack.Navigator>
  )
}
