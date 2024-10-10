import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]); 
  const handleFetch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(response => {
      if(!response.ok)
        throw new Error("Error in fetch: " + response.statusText); 

      return response.json(); 
      setIngredient(''); 
    })
    .then(data => setRecipes(data.meals))
    .catch(err => console.error(err))
    ; 
  }

  return (
    <View style={styles.container}>
      <Text style = {{fontSize: 30, fontWeight: 'bold'}}>Recipe Finder</Text>
      <TextInput 
        style={styles.input}
        placeholder='Enter an ingredient'
        value={ingredient}
        onChangeText={value => setIngredient(value)}
      />
      <Button title="FIND" onPress={handleFetch}/>

      {(recipes) === null  ? (
        <Text>No meals available for that ingredient</Text>
      ) : (
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.idMeal}
          renderItem={ ({item}) => 
          <View style={styles.card}> 
           
            <Image 
              source={{uri : item.strMealThumb}} 
              style={{width:60, height: 60, marginHorizontal:10, borderRadius: 40}}
            />
             <Text style={{fontSize: 16, fontWeight:'500'}}>{item.strMeal} </Text>
          </View> }
        />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:10, 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    paddingTop: 100, 
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
    marginTop: 15,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 5,
    borderRadius: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 10, 
    flexDirection: 'row',
    alignItems: 'center', 
  }
});
