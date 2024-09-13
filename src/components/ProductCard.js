import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function App({isLiked, setIsLiked}){
  
    return(
      <View style={styles.container}>
        <Image source={require('../assets/girl.png')} style={styles.coverImage}/>
        <View style={styles.content}>
          <Text style={styles.title}>Jacket Jeans</Text>
          <Text style={styles.price}>$45.9</Text>
        </View>
        <TouchableOpacity onPress={()=>setIsLiked(!isLiked)} style={styles.likeContainer}>
          {
            isLiked?(<AntDesign name='heart' size={20} color={'#e55b5b'}/>)
          :(
          <AntDesign name='hearto' size={20} color={'#e55b5b'}/>
          )}
        </TouchableOpacity>

      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    position: 'relative'
    // borderWidth: 1,
    // borderColor: 'black'
  },  
  coverImage: {
        height: 256,
        width: '90%',
        borderRadius: 20,
        marginVertical: 10,
        marginLeft: 10,
    },
    title: {
      fontSize: 18,
      color: '#444',
      fontWeight: '600'
    },
    price: {
      fontSize: 18,
      color: '#9c9c9c',
      fontWeight: '600'
    },
    content: {
      paddingLeft: 15,
    },
    likeContainer: {
      height: 34,
      width: 34,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 17,
      position: 'absolute',
      top: 20,
      right: 20
    }
})


