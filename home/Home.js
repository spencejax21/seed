import React from 'react';
import { IconButton, FlatList, Icon, NativeBaseProvider, Box, Center, Heading, Stack, HStack, Text } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native'

function WelcomeName() {
  return <Heading color="white" size="md" ml="-1">
    Welcome, user
  </Heading>
}

function AppDrawer() {
  const icons = [{
      name: 'home',
      bg: 'amber.600'
    }, {
      name: 'directions-bus',
      bg: 'emerald.600'
    }, {
      name: 'cloud',
      bg: 'blue.600'
    }, {
      name: 'list',
      bg: 'orange.600'
    }];
    return <FlatList numColumns={2} m={'-4px'} data={icons} renderItem={({
      item
    }) => {
      return <IconButton m={'12px'} borderRadius="full" bg={item.bg} variant="solid" p="12" icon={<Icon color="white" name={item.name} as={MaterialIcons} size="3xl" />} />;
    }} />;
  }

  function Favorites() {
    return <Stack space={2}>
      <Heading color="white" size="md" ml="-1">
          Favorites
      </Heading>
      <Text fontSize="xs" color="white" fontWeight="500" ml="-0.5" mt="-1">
        You have no favorited tasks
      </Text>
    </Stack>
  }
  
  function Home() {
    return <View style={styles.container}>
      <Box alignItems="center" flex={1} mt="12">
        <WelcomeName />
        <AppDrawer />
        <Favorites />
      </Box>
    </View>

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

export default Home;