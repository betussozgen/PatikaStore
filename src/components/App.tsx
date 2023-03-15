/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import Products from './Products';
import products_data from './products_data.json'

function App() {
  return(

    <FlatList

    data ={products_data}
    renderItem={({item}) => <Products products={item} />}


    />
    
   
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eceff1'
  }
})
export default App;
