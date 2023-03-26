import { NativeBaseProvider, Box } from 'native-base';
import Home from './home/Home';
import {NavigationContainer} from '@react-navigation/native';
import Login from './login/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './login/Signup';
import Profile from './profile/Profile';
import Detail from './home/components/detail';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Main from './Main';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
        <NativeBaseProvider>
          <NavigationContainer>
              <Stack.Navigator initialRouteName='login' screenOptions={{headerShown: false }}>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="signup" component={Signup}/>
                <Stack.Screen name="profile" component={Profile}/>
                <Stack.Screen name="detail" component={Detail} />
                <Stack.Screen name="main" component={Main}/>
              </Stack.Navigator>
          </NavigationContainer>
          <NavigationContainer>
            
          </NavigationContainer>
        </NativeBaseProvider>
  );
}
