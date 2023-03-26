import React, { useEffect, Component } from "react";
import { Input, IconButton, Checkbox, Text, Box, VStack, HStack, Heading, Icon, Center, useToast, NativeBaseProvider } from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";
import { StyleSheet, View } from 'react-native';
import DatabaseManager from "../DatabaseManager";

const TaskList = ({route, navigation}) => {
    const { type } = route.params;
    
    const [list, setList] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [day, setDay] = React.useState("");
  
    const handleStatusChange = index => {
      setList(prevList => {
        const newList = [...prevList];
        if(!newList[index].isCompleted){
          newList[index].isCompleted = true;
        }
        //newList[index].isCompleted = !newList[index].isCompleted;
        return newList;
      });
    };

    useEffect(() => {
      async function fetchData(){
        try {
          setLoading(true);
          const tasks = await DatabaseManager.getTasks(type);
          const dbList = [];
          tasks.forEach((task) => {
            dbList.push({title: task.text + " (" + task.points + " pts)", isCompleted: false});
          });
          setList(dbList);
          const d = new Date();
          const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
          setDay(weekday[d.getDay()]);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
      fetchData();
    }, []);

    if(loading) return (
      <Text>Loading</Text>
    );

    if (!list) return (
      <Text>Data not available</Text>
    );
      
    return <Center w="100%">
        <Box maxW="300" w="100%">
          <Heading mb="2" size="md">
            {day}
          </Heading>
          <VStack space={4}>
            <VStack space={2}>
              {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
                  <Checkbox isChecked={item.isCompleted} onChange={() => handleStatusChange(itemI)} value={item.title} accessibilityLabel = {item.title}></Checkbox>
                  <Text width="100%" flexShrink={1} textAlign="left" mx="2" strikeThrough={item.isCompleted} _light={{
                color: item.isCompleted ? "gray.400" : "coolGray.800"
              }} _dark={{
                color: item.isCompleted ? "gray.400" : "coolGray.50"
              }} onPress={() => handleStatusChange(itemI)}>
                    {item.title}
                  </Text>
                </HStack>)}
            </VStack>
          </VStack>
        </Box>
      </Center>;
  };

  function Back({navigation}) {
    return <IconButton mr="82%" mt="4"  m={'4px'} borderRadius="full" variant="solid" 
        p="2" icon={<Icon color="white" name="back" as={Entypo} size="lg" aria-label="back"/>} 
        onPress={() => {
          navigation.navigate('home');
        }} />;
  }


  function Detail({route, navigation}) {
    return <View style={styles.container}>
      <Back navigation={navigation}/>
      <Box alignItems="center" flex={1} mt="8">     
        <TaskList route={route} navigation={navigation}/>
      </Box>
    </View>

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }
  })

export default Detail;