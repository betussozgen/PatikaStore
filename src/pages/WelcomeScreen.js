import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Button from '../components/Button/Button';

function WelcomeScreen({ navigation }) {
    function gotoProductScreen() {
        navigation.navigate('ProductScreen');
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>PatikaStore</Text>
            <Button text='Ürünlere Göz Atın' onPress={gotoProductScreen} />
        </SafeAreaView>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
    },
    header: {
        color: 'purple',
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
    }
})