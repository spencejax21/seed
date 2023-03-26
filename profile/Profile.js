import React, { useEffect, Component } from "react";
import { Input, IconButton, Checkbox, Text, Box, VStack, HStack, Heading, Icon, Center, useToast, NativeBaseProvider, ScrollView } from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";
import { StyleSheet, View } from 'react-native';

function Back({navigation}) {
  return <IconButton mr="82%" mt="8"  m={'4px'} borderRadius="full" variant="solid" 
      p="2" icon={<Icon color="white" name="back" as={Entypo} size="lg" aria-label="back"/>} 
      onPress={() => {
        navigation.navigate('home');
      }} />;
}

function Profile({navigation}) {
    return <View style={styles.container}>
      <Back navigation={navigation}/>
        <Text>Profile Page</Text>
    </View>
        
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      //justifyContent: 'center'
    }
  })

export default Profile;