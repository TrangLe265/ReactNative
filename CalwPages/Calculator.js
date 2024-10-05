import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import History from './History';

export default function Calculator({navigation}) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0); 
  const [result, setResult] = useState(0); 
  const [history, setHistory] = useState([]); 
  

  function handleAdd(){
    const sum = parseFloat(num1) + parseFloat(num2)
    setResult(sum);
    const newHistory = `${num1} + ${num2} = ${sum}`
    setHistory([...history, newHistory ]);  
    console.log(newHistory); 
    setNum1(0); 
    setNum2(0);   
  }

  function handleMinus(){
    const subtract = parseFloat(num1) - parseFloat(num2)
    setResult(subtract);
    const newHistory = `${num1} - ${num2} = ${subtract}`
    setHistory([...history, newHistory ]);  
    console.log(newHistory);
    setNum1(0); 
    setNum2(0);  
  }


  return (
    <View style={styles.container}>
        <Text style = {styles.text}>Result: {result} </Text>
      <TextInput 
        style = {styles.input}
        value={num1}
        keyboardType='numeric'
        onChangeText = {num => setNum1(num)} >
      </TextInput>
      <TextInput 
        style = {styles.input}
        value={num2}
        keyboardType='numeric'
        onChangeText = {num => setNum2(num)} >
      </TextInput>
      <Button title=" + " onPress={handleAdd}  />
      <Button title=" - " onPress={handleMinus} />
      <Button title='History' onPress={() => navigation.navigate('History', { history })} />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontStyle: 'Poppin', 
    marginBottom: 10,

  }, 
  input: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 0.5,
    margin: 10,
    width: '80%',
  }, 
});

