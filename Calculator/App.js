import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button,StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [no1, setNo1] = useState("");
  const [no2, setNo2] = useState("");  
  const [result, setResult] = useState(0); 

  const Add = () =>{
    setResult(parseFloat(no1) + parseFloat(no2)); 
  }

  const Minus = () =>{
    setResult(parseFloat(no1) - parseFloat(no2)); 
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Assignment 1 Calculator</Text>
      <Text style = {styles.text} >Result: {result} </Text>
      <TextInput 
        style ={styles.input}
        placeholder='Please enter an integer'
        value={no1}
        onChangeText={no1 => setNo1(no1)}
        keyboardType='numeric'>
      </TextInput>
      <TextInput 
        style ={styles.input}
        placeholder='Please enter an integer'
        value={no2}
        onChangeText={no2 => setNo2(no2)}
        keyboardType='numeric'>
      </TextInput>
      <Button style={styles.button} onPress= {Add} title= " + " /> 
      <Button style={styles.button} onPress= {Minus} title= " - " /> 
      
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontStyle: 'Poppin', 
  }, 
  input: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 0.5,
    margin: 10,
    width: '80%',
  }, 
  button: {
    backgroundColor: '#0000FF',
    padding: 10,
    marginVertical: 5,
    borderColor: 'blue',
    borderWidth: 0.5,
  }

});
