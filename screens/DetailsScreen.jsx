import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = ({navigation}) => {

  // TODO : the detail screen 
  // TODO : button marking as true
  // TODO : Updating data - found in add and manage data
  // TODO : add data using the setDoc (doc(db,"users","uid"),{}) so that when adding users it uses the same id

  return (
    
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>Bucket List Title Here</Text>
      <Text>Description Here</Text>
      <Text>Due date: Tomorrow?</Text>
      <Text>Priority: Yes</Text>

      <Button
        title='mark completed / already done'
        color="red"
        disabled={false}
      />
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,
        marginTop: 20,
    }
})