import { VStack, Heading, Center, Box, Text } from "native-base"
import { StyleSheet, View } from 'react-native'

function Profile() {
    return <View style={styles.container}>
        <Text>Profile Page</Text>
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

export default Profile;