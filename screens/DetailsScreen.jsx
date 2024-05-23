import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { getBucketItem } from '../services/DbService';
import { useFocusEffect } from '@react-navigation/native';

const DetailsScreen = ({ navigation }) => {

  // TODO : the detail screen 
  // TODO : button marking as true
  // TODO : Updating data - found in add and manage data
  // TODO : add data using the setDoc (doc(db,"users","uid"),{}) so that when adding users it uses the same id
  // TODO : amrk an item as completed should have a strickthrough styling

  // ? Process 
  // click on item
  // call info specific to item selected

  const [bucketItem, setBucketItem] = useState([]) // creating a usestate

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      handleGettingOfItemData()
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        // DO NOTHING
      };
    }, [])
  );

  const handleGettingOfItemData = async () => {
    var itemData = await getBucketItem()
    // check other consol log in Dbservice above the return
    // console.log("Item Data: " + itemData) 
    setBucketItem(itemData)
  }

  return (

    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Bucket List Title Here</Text>
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