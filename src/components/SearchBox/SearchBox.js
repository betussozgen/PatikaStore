import React from "react";
import {
SafeAreaView,
TextInput,
StyleSheet
} from "react-native"
import styles from "./SearcBox.style"

const SearchBox = () => {
    const [text, onChangeText] = React.useState("")
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Ara..."
            />
        </SafeAreaView>

    )
}
export default SearchBox;