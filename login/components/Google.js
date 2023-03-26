
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