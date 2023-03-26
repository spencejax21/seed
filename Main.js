import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from './profile/Profile';
import Home from './home/Home';
import Ionicons from '@expo/vector-icons/Ionicons';
import Leaderboard from './leaderboard/Leaderboard';

export default function Main(){

    const Tab = createMaterialBottomTabNavigator();

    return (
      <Tab.Navigator initialRouteName="Home" shifting="true">
        <Tab.Screen name="Leaderboard" component={Leaderboard} options={{tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="format-list-numbered" color={color} size={26} justifyContent="center" />)}}/>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} justifyContent="center" />)}}/>
         <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-cog" color={color} size={26} justifyContent="center" />)}}/>
      </Tab.Navigator>
    );
  }
  