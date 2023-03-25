import { NativeBaseProvider, Box } from 'native-base';
import Home from './home/Home';
import {NavigationContainer} from '@react-navigation/native';
import Login from './login/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';

export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyBzjIUQJEOpkTmMDNgC4xMf3NKkpRoGCww",
    authDomain: "seed-e3d11.firebaseapp.com",
    projectId: "seed-e3d11",
    storageBucket: "seed-e3d11.appspot.com",
    messagingSenderId: "616062033210",
    appId: "1:616062033210:web:a8d7f9ae7a9d5e9f54c403",
    measurementId: "G-MZZ6DFW039"
  };
  const app = initializeApp(firebaseConfig);

  const Stack = createNativeStackNavigator();

  return (
        <NativeBaseProvider>
          <NavigationContainer>
              <Stack.Navigator initialRouteName='login' screenOptions={{headerShown: false }}>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="home" component={Home} />
              </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
  );
}
