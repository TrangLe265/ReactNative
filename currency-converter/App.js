import { StatusBar } from 'expo-status-bar';
import { useSyncExternalStore } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';

export default function App() {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(0); 
  const [result, setResult] = useState(0); 
  const [currency, setCurrency] = useState(''); 

  const getData = () => {
    
    var myHeaders = new Headers();
    myHeaders.append("apikey", "5gf3CBRhuofx7rQjlY3YrEumeO3aS70C");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
      .then(response => {
        if (!response.ok) throw new Error("Error in fetch")
        return response.json()
      })
      .then(result => setRates(result.rates))
      .catch(error => console.log('error', error));
  }  
 
  useEffect(() => getData(), []); 

  const handleConvert = () => {
    const rate = rates[currency]
    setResult((amount/rate).toFixed(5)); 
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>{result} €</Text>
      <Button title='CONVERT' onPress={handleConvert} />

      <View style={{flexDirection: 'row', alignItems:'baseline'}}>
      <Picker
          style={{height:50, width:100}}
          selectedValue={currency}
          onValueChange={value => setCurrency(value)}
        >
          {
            Object.keys(rates).map(item =>
              <Picker.Item key={item} label={item} value={item} />
            )}
        </Picker>
        <TextInput
          style={{fontSize: 20, width: 100,height: 50,borderWidth:0.4, borderRadius: 15}} 
          placeholder='Enter the amount'
          keyboardType='numeric'
          type='numeric'
          value= {amount}
          onChangeText={amount => setAmount(amount)}
        />

       
      </View>

      
      
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
});
