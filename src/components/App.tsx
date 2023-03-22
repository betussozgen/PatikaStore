/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Products from './Products';
import products_data from './products_data.json'
import SearchBox from './SearchBox';
import Header from './Header';

function App() {
  //const renderProduct = ({item}: {item: any}) => <Products products={item}/>;
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBox />
      <FlatList
        //showsVerticalScrollIndicator={true}
        renderItem={({ item }) => <Products products={item} />}
        data={products_data}
        numColumns={2}
      //keyExtractor={(item)=> item.id.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 'auto',
    backgroundColor: 'white',
    padding: 3,
  }
})
export default App;
