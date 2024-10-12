import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import MyMap from './MyMap';
import { useState } from 'react';

export default function App() {
  const [address, setAddress] = useState('');
  const [latitude, setLat] = useState(''); 
  const [longitude, setLon] = useState(''); 

  const handleFetch = () => {
    fetch(`https://geocode.maps.co/search?q=${address}&api_key=670a278dabfd1904275585zmea12f19`)
    .then(response => {
      if(!response.ok)
        throw new Error("Error in fetch: " + response.statusText)
      
        return response.json()
    })
    .then(data => {
        setLat(data[0].lat)
        setLon(data[0].lon)
        setAddress('')      
      })
    .catch(err => console.log(err)); 
  }


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.inputContainer}>
          <Text 
            style={{fontSize:15, marginTop:20, color:'blue'}}>
            Enter an address below
          </Text>

          <TextInput
            style = {styles.input}
            placeholder='format: address, city'
            value={address}
            onChangeText={text => setAddress(text)} />

          <Button title="SHOW" onPress={handleFetch}/>
 
      </View>

      <MyMap 
        style={styles.map}
        latitude = {latitude}
        longitude = {longitude}
      />
      
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    //flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    height: '40%',
    paddingTop: 120,
    //alignItems: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  map: {
    height: '60%',
    width: '100%',
  },
  input: {
    height: 50,
    width: 300, 
    padding: 10, 
    borderWidth: 0.5,
    marginVertical: 10,
    borderRadius: 10, 
    borderColor: 'blue', 
  }, 

});
