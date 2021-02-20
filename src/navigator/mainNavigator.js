import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings207801Navigator from '../features/Settings207801/navigator';
import UserProfile207794Navigator from '../features/UserProfile207794/navigator';
import Settings207793Navigator from '../features/Settings207793/navigator';
import Settings207791Navigator from '../features/Settings207791/navigator';
import SignIn2207789Navigator from '../features/SignIn2207789/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings207801: { screen: Settings207801Navigator },
UserProfile207794: { screen: UserProfile207794Navigator },
Settings207793: { screen: Settings207793Navigator },
Settings207791: { screen: Settings207791Navigator },
SignIn2207789: { screen: SignIn2207789Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
