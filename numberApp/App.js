import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button,StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [number,setNumber] = useState(0); 
  const [guess, setGuess] = useState(''); 
  const [count, setCount] = useState(0); 
  const [message, setMessage] = useState("Guess a number between 1-100")

  useEffect(() => reset(),[]); 

  function reset(){
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setCount(0); 
  }
  function handleGuess(){
    
    if (number === parseInt(guess)){
      window.alert(`You guessed the number in ${count} guesses`); 
      reset(); 
    }else if (guess < number) {
      setMessage(`Your guess ${guess} is too low`);   
    }else{
      setMessage(`Your guess ${guess} is too high`);
    } 
    setCount(prevCount => (prevCount+1));
    setGuess('');
  }

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <TextInput 
        style={styles.input}
        value ={guess}
        onChangeText={(guess) => setGuess(guess)}>
      </TextInput>
      <Button onPress={handleGuess} title="MAKE GUESS"/>
      <StatusBar style="auto" />
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
