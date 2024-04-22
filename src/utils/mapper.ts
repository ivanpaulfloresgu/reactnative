import { DrawerItemName } from '../models/Drawer'
import { HomeFlowScreen } from '../navigation/HomeStack/HomeFlowScreen'

export const mapDrawer: Record<DrawerItemName, string> = {
  [DrawerItemName.HOME]: '',
  [DrawerItemName.GINO]: '',
  [DrawerItemName.IVAN]: HomeFlowScreen.IVAN_STACK,
  [DrawerItemName.JAHYR]: '',
  [DrawerItemName.JHEYCKOFF]: '',
  [DrawerItemName.LEONARDO]: HomeFlowScreen.LEO_STACK,
}
