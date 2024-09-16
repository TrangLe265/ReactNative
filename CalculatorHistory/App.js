import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View,
  Button,
  FlatList,
 } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0); 
  const [result, setResult] = useState(0); 
  const [history, setHistory] = useState([]); 

  function handleAdd(){
    const sum = parseFloat(num1) + parseFloat(num2)
    setResult(sum);
    setHistory([...history, `${num1} - ${num2} = ${sum}`]) ;  
  }

  function handleMinus(){
    const subtract = parseFloat(num1) - parseFloat(num2)
    setResult(subtract);
    setHistory([...history, `${num1} - ${num2} = ${subtract}`]) ;
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
      <FlatList
        data = {history}
        renderItem={({item}) => <Text style = {styles.text}>{item}</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:200,
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
});
