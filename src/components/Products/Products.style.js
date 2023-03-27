
import { StyleSheet, Dimensions } from "react-native"; 


export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        //marginHorizontal: 'auto',
        //alignSelf: 'space-around',
        padding: 3,
    },
    products: {
        backgroundColor: '#DCDCDC',
        borderRadius: 10,   
        padding: 3,     
    },
    image: {
        borderRadius: 10,
        height: Dimensions.get('window').height / 4,
        margin: 5,
        resizeMode: 'contain',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 2,       
    },
    price: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 2,
    },
    inStock: {
        color: 'red',
        borderRadius: 10,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 2,
    },
})