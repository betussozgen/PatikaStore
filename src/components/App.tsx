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
import Products from './Products/Products';
import products_data from './products_data.json'
import SearchBox from './SearchBox/SearchBox';
import Header from './Header/Header';

function App() {
 

  const [list, setList] = useState(products_data);

  const heandleSearch = text => {
    const filteredList = products_data.filter( products => {
      const searchedText = text.toLowerCase(); //Kullanıcının  girdiği harfi lower yaptım.
      const currentTittle = products.title.toLowerCase() // o an dönen title lowecase yaptım.

      return currentTittle.indexOf(searchedText) > -1; //products ta kullanıcının girdiği harf var mı yok mu
    })

    setList(filteredList);

  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBox onSearch={heandleSearch}/>
      <FlatList
        //showsVerticalScrollIndicator={true}
        renderItem={({ item }) => <Products products={item} />}
        data={list}
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
