import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { getMyBucketList } from '../services/DbService';
import { useFocusEffect } from '@react-navigation/native';

const ListScreen = ({ navigation }) => {

    const goToAdd = () => { navigation.navigate("Add") }

    // now if we want to start using the data we are calling
    const [bucketItems, setBucketItems] = useState([]) // creating a usestate

    // useEffect(() => { // only running on first load - check react native navigation : navigation Lifecycle : we want to use - useFocusEffect
    //     // we want to trigger 
    //     // comment out so you dont keep making calls
    //     // getMyBucketList()
    //     handleGettingOfData()
    // }, [])

    // this will be very handy when using real time data listener : check create screen for better option of refreshing on create item instead of view screen
    useFocusEffect(
        React.useCallback(() => {
            // Do something when the screen is focused
            handleGettingOfData()
            return () => {
                // Do something when the screen is unfocused
                // Useful for cleanup functions
                // DO NOTHING
            };
        }, [])
    );

    const handleGettingOfData = async () => {
        var allData = await getMyBucketList()
        // check other consol log in Dbservice above the return
        // console.log("All Data: " + allData) 
        setBucketItems(allData) // set bucket items tot alldata
    }
    

    return (
        <SafeAreaView>
            <View style={styles.container}>

                <Pressable style={styles.addButton} onPress={goToAdd}>
                    <Text style={styles.addButtonText}>Add</Text>
                    <Entypo name="bucket" size={16} color="green" />
                </Pressable>

                {/* //* creating a map */}
                {/* THIS WILL LOOP FOR EACH ITEM - scroll view or a flat list and you need to know why you used the one selected*/}
                {/* // * : make it so that after youve added data it also refreshes the home page : See useFocusEffect above*/}
                {
                    // just so that if there is empty data it doesnt bug out
                    // first check if items is empty - if not empty then display map - empty then display text
                    bucketItems != [] ? (
                        bucketItems.map((item, index) => (
                            
                            <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate("Details",
                                {
                                    itemID:item?.id,
                                    itemDesc:item?.description,
                                    itemDue:item?.due,
                                    itempriority:item?.priority,
                                }
                            )}>
                                <Text>{item.title}</Text>
                                {/* // when the item is a priority the star must show - with if statement */}
                                {item.priority ? <AntDesign name="star" size={24} color="orange" /> : null}
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text>no items found</Text>
                    )
                }

                {/* //! this is moved to above map */}
                {/* <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Details")}>
                    <Text>Title</Text>
                    <AntDesign name="star" size={24} color="orange" />
                </TouchableOpacity> */}
                {/* END LOOP */}
            </View>

        </SafeAreaView>
    )
}

export default ListScreen

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 10,
    },
    card: {
        width: '100%',
        backgroundColor: 'white',
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addButton: {
        backgroundColor: 'white',
        borderColor: 'green',
        borderWidth: 2,
        padding: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    addButtonText: {
        textAlign: 'center',
        color: 'green',
        fontWeight: 'bold'
    }
})