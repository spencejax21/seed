import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NativeBaseProvider } from 'native-base';
import Example from './home/components/Example';
import Login from './login/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <NativeBaseProvider>
        <Login/>
      </NativeBaseProvider>
      <StatusBar style="auto"/>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
