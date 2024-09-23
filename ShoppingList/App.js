import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [ item, setItem] = useState("");
  const [items, setItems] = useState([]); 

  const handleAdd = () => {
    setItems([...items , { key : item} ]); 
    setItem("");
  }

  const handleClear = () => {
    setItems([]); 
  }

  /*useEffect(() =>
    {(console.log("Updating items:", items))}, [items]
  )*/

  return (
    <View style={styles.container}>
      
      <TextInput
        style = {styles.input}
        placeholder='Enter items'
        onChangeText={ text => setItem(text)}
        value = { item }
      />
  
      <TouchableOpacity style = {styles.btn} onPress={handleAdd}>
        <Text style = {styles.btnText}>ADD</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.btn} onPress={handleClear}>
        <Text style = {styles.btnText}>Clear</Text>
      </TouchableOpacity>
     
      <Text style = {styles.h1}>SHOPPING LIST</Text>
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 0.5,
    margin: 10,
    width: '80%',
  }, 
  h1: {
    fontSize: 20,
    fontWeight: "300", 
  },
  btn: {
    backgroundColor: "blue", 
    padding: 10,
    margin: 5, 
  },
  btnText: {
    color: "white", 
  }
});
