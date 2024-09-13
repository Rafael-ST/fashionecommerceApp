import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import Header from '../components/Header'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Category  from '../components/Category'

const categories = ['Trending Now', 'All', 'New', 'Womens']

export default function App(){
  const [selectedCategory, SetSelectedCategory] = useState(null)
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

        <FlatList
          data={categories}
          renderItem={({item})=><Category item={item} selectedCategory={selectedCategory} SetSelectedCategory={SetSelectedCategory}/>}
          keyExtractor={(item) => item}
          horizontal={true}
          showsVerticalScrollIndicator={false}
        />

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