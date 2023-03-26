import { VStack, Heading, Center, Box, Pressable, Text } from "native-base"
import { StyleSheet, View } from 'react-native'

export default Login = ({navigation}) => {
    return <View style={styles.container}>
        <Box flex={1} bg="black" alignItems="center" justifyContent="center">
            <Center>
                <VStack space={6} alignItems="center">
                    <Heading size="lg" color="white">Seed</Heading>
                    <Pressable rounded="xl" bg="#1cd0a2" shadow="3" p="2"  onPress={() => {
                        navigation.navigate('signup')
                    }}>
                    <Center width={64} height={8}>
                        <Text bold color="white">Login</Text>
                    </Center>
                    </Pressable>
                    
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