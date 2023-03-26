import React from "react";
import { Input, IconButton, Checkbox, Text, Box, VStack, HStack, Heading, Icon, Center, useToast, NativeBaseProvider } from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";
import { StyleSheet, View } from 'react-native'


const TaskList = ({route, navigation}) => {
    const { type } = route.params;
    //traverse all tasks in the databaase
    const instState = [{
      title: "Turn off your lights",
      isCompleted: true
    }, {
      title: "Meeting with team at 9",
      isCompleted: false
    }, {
      title: "Check Emails",
      isCompleted: false
    }, {
      title: "Write an article",
      isCompleted: false
    },{
      title: type,
      isCompleted: false
    }];
    const [list, setList] = React.useState(instState);
    const [inputValue, setInputValue] = React.useState("");
    const toast = useToast();
  
    const addItem = title => {
      if (title === "") {
        toast.show({
          title: "Please Enter Text",
          status: "warning"
        });
        return;
      }
  
      setList(prevList => {
        return [...prevList, {
          title: title,
          isCompleted: false
        }];
      });
    };
  
    const handleDelete = index => {
      setList(prevList => {
        const temp = prevList.filter((_, itemI) => itemI !== index);
        return temp;
      });
    };
  
    const handleStatusChange = index => {
      setList(prevList => {
        const newList = [...prevList];
        newList[index].isCompleted = !newList[index].isCompleted;
        return newList;
      });
    };
  
    return <Center w="100%">
        <Box maxW="300" w="100%">
          <Heading mb="2" size="md">
            Wednesday
          </Heading>
          <VStack space={4}>
            <HStack space={2}>
              <Input flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Add Task" />
              <IconButton borderRadius="sm" variant="solid" icon={<Icon as={Feather} name="plus" size="sm" color="warmGray.50" />} onPress={() => {
              addItem(inputValue);
              setInputValue("");
            }} />
            </HStack>
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
                  <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
                </HStack>)}
            </VStack>
          </VStack>
        </Box>
      </Center>;
  };


  function Detail({route, navigation}) {
    return <View style={styles.container}>
      <Box alignItems="center" flex={1} mt="12">
        <TaskList route={route} navigation={navigation}/>
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

export default Detail;