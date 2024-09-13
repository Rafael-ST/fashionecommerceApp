import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


export default function App({item, selectedCategory, SetSelectedCategory}){
    return(
      <TouchableOpacity onPress={()=>SetSelectedCategory(item)}>
        <Text style={[styles.categoryText, selectedCategory===item &&
            {color: '#fff', backgroundColor: '#e96e6e'}
        ]}>{item}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 16,
        fontWeight: '600',
        // color: '#fff',
        color: '#938f8f',
        // backgroundColor: '#e96e6e',
        backgroundColor: '#dfdcdc',
        textAlign: 'center',
        borderRadius: 16,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})


