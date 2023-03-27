import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native"
import styles from "./Header.styles"



const Header = () => {
    return (
        <SafeAreaView>
            <Text style={styles.title}>
                PATIKASTORE
            </Text>
        </SafeAreaView>
    )
}
export default Header;


