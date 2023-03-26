import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Profile from './profile/Profile';
import Home from './home/Home';

export default function Main(){

    const Tab = createMaterialBottomTabNavigator();

    return (
      <Tab.Navigator>
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="profile" component={Profile} />
      </Tab.Navigator>
    );
  }
  