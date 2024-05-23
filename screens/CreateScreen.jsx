import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { createNewBucketItem } from '../services/DbService'

const CreateScreen = ({ navigation }) => {


    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState(false)
    const [due, setDue] = useState('')
    const [description, setDescription] = useState('')

    // TODO : ADD VALIDATION

    // * : we want to call the createNewBucketItem function to our create screen 
    // done at the top to pass our data down
    const handleCreation = async () => {
        // todo : need to pass all our data to the function - defined in services file
        // now for item creation
        // TODO : make sure all values have been entered - show error if not - or hide button - basic if statement logic
        var items = { title, priority, due, description, isCompleted: false }
        // * : to navigate back to previous screen after filling in info
        var success = await createNewBucketItem(items)
        if (success) {
            navigation.goBack() // if successfull go back home
            // Optional that when the use click create then only will it go back and re-render the data insead of it always re-rendering apon viewing
            // check passing parameters to routes : https://reactnavigation.org/docs/params : passing params to previous screen
        } else {
            // TODO : validation on why
        }
    }

    return (
        // OPTIONAL - drag to reload our data
        <SafeAreaView >
            <View style={styles.container}>

                <TextInput
                    style={styles.inputField}
                    placeholder="Bucket List Title"
                    onChangeText={newText => setTitle(newText)}
                    defaultValue={title}
                />

                <TextInput
                    style={styles.inputField}
                    placeholder="When do you want it done?"
                    onChangeText={newText => setDue(newText)}
                    defaultValue={due}
                />

                <TextInput
                    multiline
                    numberOfLines={4}
                    style={styles.inputField}
                    placeholder="Description of bucket list"
                    onChangeText={newText => setDescription(newText)}
                    defaultValue={description}
                />

                <View style={styles.switch}>
                    <Switch
                        trackColor={{ false: 'black', true: 'green' }}
                        thumbColor={priority ? 'yellow' : 'white'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(toggle) => setPriority(toggle)}
                        value={priority}
                    />
                    <Text>Priority?</Text>
                </View>

                {/* the onpress for our create item */}
                <TouchableOpacity style={styles.button} onPress={handleCreation}>
                    <Text style={styles.buttonText}>Create Bucket List Item</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default CreateScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    inputField: {
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 15,
        padding: 10
    },
    button: {
        backgroundColor: "green",
        textAlign: 'center',
        padding: 15,
        marginTop: 30
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    },
    switch: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: 10,
    }
})