import React from 'react';
import { IconButton, FlatList, Icon, NativeBaseProvider, Box, Center, Heading, Stack, HStack, Text, Pressable } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';


function WelcomeName() {
<<<<<<< HEAD
  return <Heading color="white" size="2xl" ml="-1" bold="true" mt="-1.5">
=======
  return <Heading color="black" size="md" ml="-1">
>>>>>>> tasks
    Welcome, user
  </Heading>
}

const AppDrawer = ({navigation}) => {
  const icons = [{
      name: 'home',
<<<<<<< HEAD
      bg: '#1cd0a2'
    }, {
      name: 'directions-bus',
      bg: '#f5c07f'
    }, {
      name: 'cloud',
      bg: '#dd9fff'
    }, {
      name: 'list',
      bg: '#76b5ff'
=======
      bg: 'amber.600',
      type: 'home'
    }, {
      name: 'directions-bus',
      bg: 'emerald.600',
      type: 'transportation'
    }, {
      name: 'cloud',
      bg: 'blue.600',
      type: 'reuse'
    }, {
      name: 'list',
      bg: 'orange.600',
      type: 'all'
>>>>>>> tasks
    }];
    return <FlatList scrollEnabled="false" numColumns={2} m={'-4px'} data={icons} renderItem={({
      item
    }) => {
      return <IconButton m={'12px'} borderRadius="full" bg={item.bg} variant="solid" 
        p="12" icon={<Icon color="white" name={item.name} as={MaterialIcons} size="3xl" aria-label={item.type}/>} 
        onPress={() => {
          navigation.navigate('detail', {
            type: item.type,
          });
        }} />;
    }} />;
  }

  function Favorites() {
    return <Stack space={2}>
      <Heading color="black" size="md" ml="-1">
          Favorites
      </Heading>
      <Text fontSize="xs" color="black" fontWeight="500" ml="-0.5" mt="-1">
        You have no favorited tasks
      </Text>
    </Stack>
  }
  
  function Home({navigation}) {
    return <View style={styles.container}>
      <Box alignItems="center" flex={1} mt="12">
        <Box ml="8" mr="4" mt="2" justifyContent="space-between" display="flex" flexDirection="row" style={{gap:"85%"}}>
          <WelcomeName />
          <Avatar navigation={navigation}/>
        </Box>
<<<<<<< HEAD
        <Box paddingTop="40%">
          <AppDrawer />
=======
        <Box paddingTop="35%">
          <AppDrawer navigation={navigation}/>
          <Favorites />
>>>>>>> tasks
        </Box>
      </Box>
    </View>

  }

  function Avatar({navigation}) {
    return( 
      <Pressable onPress={() => {
          navigation.navigate('profile');
      }}>
<<<<<<< HEAD
          <Ionicons name="person-circle-outline" size={36} color="white" alignItems="right"/>
=======
          <Ionicons name="person-circle" size={36} color="black" alignItems="right"/>
>>>>>>> tasks
      </Pressable>);
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

export default Home;