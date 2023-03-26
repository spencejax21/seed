import { VStack, Heading, Center, Box, Text } from "native-base"
import { StyleSheet, View } from 'react-native'

function Leaderboard() {
    return <View style={styles.container}>
        <Text>Leaderboard</Text>
    </View>
        
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

export default Leaderboard;