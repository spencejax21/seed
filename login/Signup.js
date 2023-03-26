import { StyleSheet, View, Image } from 'react-native'
import { Box, Input, VStack, Pressable, Center, Text } from 'native-base'
import { database } from '../firebaseConfig';
import { doc, setDoc } from "firebase/firestore"; 
import React from 'react';

const addNewUser = async (user, pass) => {
    await setDoc(doc(database, "users", user), {
        'username': user,
        'password': pass
    });

}

export default Signup = ({navigation}) => {

    const [userData, setUserData] = React.useState("");
    const [passData, setPassData] = React.useState("");

    return <View style={styles.container}>
        <Box flex={1} bg="black" alignItems="center" justifyContent="center">
            <VStack space={6} alignItems="center">
                <Input color="white" focusOutlineColor="#1cd0a2" bg="#1d2225" size="lg" mx="3" variant="rounded" placeholder="Enter username" w="80%" h="14%" onChangeText={value => setUserData(value)} />
                <Input type="password" color="white" focusOutlineColor="#1cd0a2" bg="#1d2225" size="lg" mx="3" variant="rounded" placeholder="Enter password" w="80%" h="14%" onChangeText={value => setPassData(value)}/>
                <Pressable rounded="xl" bg="#1cd0a2" shadow="3" p="2"  onPress={() => {
                        
                        addNewUser(userData, passData);
                        navigation.navigate("home");  

                    }}>
                    <Center width={48} height={8}>
                        <Text bold color="white">Sign up</Text>
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
