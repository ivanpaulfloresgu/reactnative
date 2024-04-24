import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeFlowScreen, HomeStackParamList } from './HomeFlowScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { widthPercent } from '../../utils/dimensions'
import CustomDrawer from '../../components/CustomDrawer/CustomDrawer'
import Home from '../../views/home'
import { IvanStack } from '../IvanStack'
import { LeoStack } from '../LeoStack'
import { GinoStack } from '../GinoStack'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator<HomeStackParamList>()

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: widthPercent(0.8),
          flex: 1,
        },
        drawerPosition: 'right',
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
      <Stack.Screen name={HomeFlowScreen.IVAN_STACK} component={IvanStack} />
      <Stack.Screen name={HomeFlowScreen.LEO_STACK} component={LeoStack} />
      <Stack.Screen name={HomeFlowScreen.GINO_STACK} component={GinoStack} />
    </Stack.Navigator>
  )
}
