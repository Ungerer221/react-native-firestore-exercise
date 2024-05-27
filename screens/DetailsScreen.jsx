import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { getBucketItem } from '../services/DbService';
import { useFocusEffect } from '@react-navigation/native';

const DetailsScreen = ({ route, navigation }) => {

  // * : the detail screen 
  // TODO : button marking as true
  // TODO : Updating data - found in add and manage data in the docs
  // TODO : add data using the setDoc (doc(db,"users","uid"),{}) so that when adding users it uses the same id
  // TODO : mark an item as completed should have a strickthrough styling

  // ? Process 
  // click on item
  // call info specific to item selected

  const [bucketItem, setBucketItem] = useState([]) // creating a usestate
  const [itemDescription, setItemDescription] = useState()
  const [itemDueDate, setItemDueDate] = useState()
  const [itemPriority, setItemPriority] = useState()
  //state for complete - starts false


  useFocusEffect(
    React.useCallback(() => {
      const { itemID, itemDesc, itemDue,itempriority } = route.params;
      console.log("Route", itemDesc)
      // Do something when the screen is focused
      handleGettingOfItemData(itemID) // getting the data that is being passed through
      setItemDescription(itemDesc) // getting the data that is being passed through
      setItemDueDate(itemDue) // getting the data that is being passed through
      setItemPriority(itempriority) // getting the data that is being passed through

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        // DO NOTHING
      };
    }, [])
  );

  const handleGettingOfItemData = async (itemID) => {
    var itemData = await getBucketItem(itemID)
    // check other consol log in Dbservice above the return
    // console.log("Item Data: " + itemData) 
    setBucketItem(itemData)
  }

  return (

    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Bucket List Title Here</Text>
      <Text>Description Here: {itemDescription}</Text>
      <Text>Due date: {itemDueDate}</Text>
      <Text>Priority: {itemPriority ? "Yes" : "No"}</Text>

      <Button
        //onpress
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