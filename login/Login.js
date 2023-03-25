import { VStack, Heading, Text } from "native-base"

export default Login = () => {
    return <VStack space={4} alignItems="center" mt="16">
        <Heading size="lg" color="white">Seed Login</Heading>
        <Button onPress={() => console.log("hello world")}>Login</Button>
    </VStack>

}