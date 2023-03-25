import { VStack, Heading, Center, Box } from "native-base"
import { StyleSheet, View } from 'react-native'
import Google from "./components/Google"

export default Login = ({navigation}) => {
    return <View style={styles.container}>
        <Box flex={1} bg="black" alignItems="center" justifyContent="center">
            <Center>
                <VStack space={6} alignItems="center">
                    <Heading size="lg" color="white">Seed Login</Heading>
                    <Google navigation={navigation}/>
                </VStack>
            </Center>
        </Box>
    </View>;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })