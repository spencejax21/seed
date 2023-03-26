import { Box, Text,  HStack, Pressable, Center, Image} from "native-base";
import { signInWithRedirect } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebaseConfig'

export default Google = ({navigation}) => {
    return <Box alignItems="center">
        <Pressable rounded="xl" bg="#1d2225" shadow="3" p="2"  onPress={() => {

            const provider = new GoogleAuthProvider();
            signInWithRedirect(auth, provider);

            navigation.navigate('home')
            navigation.reset({
                index: 0,
                routes: [{ name: 'home' }],
              });
        }}>
            <Center width={64} height={8}>
                <HStack space={4}>
                    <Image source={require('./google.png')} size="6" alt="logo"/>
                    <Text bold color="white">Login with Google</Text>
                </HStack>
            </Center>
        </Pressable>
    </Box>
}