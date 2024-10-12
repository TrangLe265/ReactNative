import { View, Button, Text, FlatList, StyleSheet} from "react-native"; 
import * as Contacts from 'expo-contacts'; 
import { useState } from "react";


export default function ShowContact(){
    //const [contact, setContact] = useState({});
    const [contacts, setContacts] = useState([]);  

    const getContact = async () => {
        const { status } =  await Contacts.requestPermissionsAsync(); //a native permission popup

        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.FirstName,Contacts.Fields.LastName]
            })

            if (data.length > 0 ) {
                setContacts(data); //to only show the first 10 
                console.log(data); 
            }
        }
    }

    return (
        <View style = {styles.container}>
            <FlatList
                data = {contacts}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    if (!item.firstName || !item.lastName || !item.phoneNumbers || item.phoneNumbers.length === 0){
                        return null;
                    } else {
                        return (
                            <Text>
                                {item.firstName} {item.lastName} {item.phoneNumbers[0].number}
                            </Text>);
                    }
                }
                }
            />
            <View style={styles.button}><Button title="GET CONTACTS" onPress={getContact}/></View>
            
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }, 
    button: {
        marginTop: 20, 
    },
})