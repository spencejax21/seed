import React from 'react';
import { IconButton, Progress, FlatList, Icon, NativeBaseProvider, Box, Center, Heading, Stack, HStack, Text, Pressable } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';


function WelcomeName() {
  return <Heading color="black" size="xl" ml="-1">
    Welcome, user
  </Heading>
}

const AppDrawer = ({navigation}) => {
  const icons = [{
      name: 'home',
      bg: '#dd9fff',
      type: "home",
      right: "50%",
      bottom: "60%",
      label: "House"
    }, {
      name: 'directions-bus',
      bg: '#f5c07f',
      type: "transportation",
      right: "6%",
      bottom: "60%",
      label: "Transport"
    }, {
      name: 'eco',
      bg: '#1cd0a2',
      type: "reuse",
      right: "50%",
      bottom: "40%",
      label: "Recycle"
    }, {
      name: 'list',
      bg: '#76b5ff',
      type: 'all',
      right: "5%",
      bottom: "40%",
      label: "All tasks"
    }];
    return <ZStack paddingRight="80%">
      <Text style={{zIndex: 1}} bottom="-100" right="208" color="white" fontSize="lg" bold="true">House</Text>
      <Text style={{zIndex: 1}} bottom="-100" right="33" color="white" fontSize="lg" bold="true">Transport</Text>
      <Text style={{zIndex: 1}} bottom="-230" right="202" color="white" fontSize="lg" bold="true">Recycle</Text>
      <Text style={{zIndex: 1}} bottom="-230" right="43" color="white" fontSize="lg" bold="true">All lists</Text>
      <FlatList scrollEnabled="false" numColumns={2} m={'-4px'} data={icons} renderItem={({
      item }) => {
      return <IconButton m={'12px'} borderRadius="md" bg={item.bg} variant="solid" 
          p="12" icon={<Icon mt="-7" color="white" name={item.name} as={MaterialIcons} size="4xl" aria-label={item.type}/>} 
          onPress={() => {
            navigation.navigate('detail', {
            type: item.type,
            });
          }} />
    }} /> 
    </ZStack>
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
        <Box ml="5" mr="4" mt="2" justifyContent="space-between" display="flex" flexDirection="row">
          <WelcomeName />
        </Box>
        
        <Box ml="8" mr="4" mt="20%" justifyContent="space-between" display="flex" flexDirection="row" style={{gap:"85%"}}>
          <ProgressBar/>
        </Box>
        
        <Box paddingTop="15%">
          <AppDrawer navigation={navigation}/>
          
        </Box>
       
        
      </Box>
    </View>

  }

  function Avatar({navigation}) {
    return( 
      <Pressable onPress={() => {
          navigation.navigate('profile');
      }}>
          <Ionicons name="person-circle" size={36} color="black" alignItems="right"/>
      </Pressable>);
  }

  function ProgressBar()  {
    return (
        <Box w="90%" maxW="400">
          <Progress style={{ height: 30, width: undefined }} bg="coolGray.100" _filledTrack={{
        bg: "lime.500"
        //change value to points/daily goal
        //default daily goal should be 30 points in a day
        //can change in settings?
      }} value={45} mx="4" />
          <Text ml = "25%" fontSize="xs">Daily Progress: XX Points</Text>
          
        </Box>)

  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })


export default Home;