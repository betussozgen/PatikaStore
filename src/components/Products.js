import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Products.style";


const Products = ({products}) => {
    //console.log(props)
   

    return(
        
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: products.imgURL}}></Image>
                <Text style={styles.title}>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
            </View>
      
    )
    
}

export default Products;