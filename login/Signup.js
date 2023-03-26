import { StyleSheet, View, Image } from 'react-native'
import { Box, Input, VStack, Pressable, Center, Text } from 'native-base'
import { addNewUser } from './Auth';
import React from 'react';

export default Signup = ({navigation}) => {

    const [userData, setUserData] = React.useState("");

    return <View style={styles.container}>
        <Box flex={1} bg="black" alignItems="center" justifyContent="center">
            <VStack space={6} alignItems="center">
                <Input color="white" focusOutlineColor="#1cd0a2" bg="#1d2225" size="lg" mx="3" variant="rounded" placeholder="Enter username" w="80%" h="22
                %" onChangeText={value => setUserData(value)} />
                <Pressable rounded="xl" bg="#1d2225" shadow="3" p="2"  onPress={() => {
                        addNewUser(userData);
                        navigation.navigate('home', {user: userData});
                    }}>
                    <Center width={48} height={8}>
                        <Text bold color="white">Continue to Seed</Text>
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
