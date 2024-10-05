import { FlatList, Text, StyleSheet, ScrollView } from "react-native"; 

export default function History( {route}){
    const { history } = route.params; 
    return (
       
            <FlatList 
                style = {styles.container}
                data={history}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
            />
       
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20, 
        alignContent: 'center', 
        //justifyContent: 'center', 
    },
    text: {
      fontSize: 20,
      fontStyle: 'Poppin', 
      marginBottom: 10,  
      alignSelf: 'center', 
    },
  });