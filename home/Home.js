import React from 'react';
import { IconButton, FlatList, Icon, NativeBaseProvider, Box, Center, Heading, Stack, HStack, Text, Pressable } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

function WelcomeName() {
  return <Heading color="white" size="md" ml="-1">
    Welcome, user
  </Heading>
}

const AppDrawer = ({navigation}) => {
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
      return <IconButton m={'12px'} borderRadius="full" bg={item.bg} variant="solid" 
        p="12" icon={<Icon color="white" name={item.name} as={MaterialIcons} size="3xl" />} 
        onPress={() => {
          navigation.navigate('detail')
          navigation.reset({
              index: 0,
              routes: [{ name: 'detail' }],
          });
        }} />;
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
  
  function Home({navigation}) {
    return <View style={styles.container}>
      <Box alignItems="center" flex={1} mt="12">
        <Box justifyContent="space-between" display="flex" flexDirection="row" style={{gap:"160%"}}>
          <WelcomeName />
          <Avatar navigation={navigation}/>
        </Box>
        <Box paddingTop="35%">
          <AppDrawer />
          <Favorites />
        </Box>
      </Box>
    </View>

  }

  function Avatar({navigation}) {
    return( 
      <Pressable onPress={() => {
          navigation.navigate('profile');
      }}>
          <Ionicons name="person-circle" size={36} color="white" alignItems="right"/>
      </Pressable>);
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