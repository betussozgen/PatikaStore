import React, { useState } from "react";
import {
View,
Text,
Image,
SafeAreaView,
TouchableOpacity
} from "react-native";
import styles from "./Products.style";


const Products = ({ products }) => {
    //console.log(props)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.products}>
                <Image style={styles.image} source={{ uri: products.imgURL }}></Image>
                <Text style={styles.title}>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
                {products.inStock === false && (
                    <Text style={styles.inStock}>STOKTA YOK</Text>)}
            </View>
        </SafeAreaView>
    )
}
export default Products;