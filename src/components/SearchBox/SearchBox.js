import React from "react";
import {
SafeAreaView,
TextInput,
StyleSheet
} from "react-native"
import styles from "./SearcBox.style"

const SearchBox = (props) => {
    
    
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                placeholder="Ara..."
                onChangeText={props.onSearch}
                
            />
        </SafeAreaView>

    )
}
export default SearchBox;