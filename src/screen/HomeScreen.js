import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import Header from '../components/Header'
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function App(){
    return(
      <LinearGradient
        colors={['#f4f0f3', '#fffbfc']}
        style={styles.container}
      >
        <Header/>
        <Text style={styles.matchText}>Match Your Style</Text>
        <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
                <Fontisto name={'search'} size={26} color={'#ccc'}/>
            </View>
            <TextInput placeholder='Search' style={styles.textInput}/>
        </View>
      </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    matchText: {
        fontSize: 28,
        color: '#000',
        marginTop: 20,
    },
    inputContainer: {
        backgroundColor: '#fff',
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 20
    },
    textInput: {
        flex: 1,
    },
    iconContainer: {
        marginHorizontal: 15
    }
  });