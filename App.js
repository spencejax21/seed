import { NativeBaseProvider, Box } from 'native-base';
import Home from './home/Home';
import {NavigationContainer} from '@react-navigation/native';
import Login from './login/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './profile/Profile';
import Detail from './home/components/detail';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
        <NativeBaseProvider>
          <NavigationContainer>
              <Stack.Navigator initialRouteName='login' screenOptions={{headerShown: false }}>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="profile" component={Profile}/>
                <Stack.Screen name="detail" component={Detail} />
              </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
  );
}
