import { StyleSheet, View, Image } from 'react-native'
import { Box, Input, VStack, Pressable, Center, Text } from 'native-base'

export default Signin = ({navigation}) => {
    return <View style={styles.container}>
        <Box flex={1} bg="black" alignItems="center" justifyContent="center">
            <VStack space={6} alignItems="center">
                <Input color="white" focusOutlineColor="#1cd0a2" bg="#1d2225" size="lg" mx="3" variant="rounded" placeholder="Enter username" w="80%" h="14%"/>
                <Input type="password" color="white" focusOutlineColor="#1cd0a2" bg="#1d2225" size="lg" mx="3" variant="rounded" placeholder="Enter password" w="80%" h="14%"/>
                <Pressable rounded="xl" bg="#1cd0a2" shadow="3" p="2"  onPress={() => {
                        navigation.navigate("home");  

                    }}>
                    <Center width={48} height={8}>
                        <Text bold color="white">Log In</Text>
                    </Center>
                    </Pressable>
            </VStack>  
        </Box>
    </View>;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'
    },
  })