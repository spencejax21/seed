import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Profile from './profile/Profile';
import Home from './home/Home';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Main(){

    const Tab = createMaterialBottomTabNavigator();

    return (
      <Tab.Navigator>
        <Tab.Screen name="home" component={Home} options={{tabBarIcon: <Ionicons name="home" size={36} color="black" alignItems="right"/>}}/>
        <Tab.Screen name="profile" component={Profile} />
      </Tab.Navigator>
    );
  }
  