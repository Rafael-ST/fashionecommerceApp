import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


export default function App(){
    return(
      <View style={styles.contanier}>
        <View style={styles.appIconContanier}>
            <Image source={require('../assets/appicon.png')} style={styles.appIcon} />
        </View>
        <Image source={require('../assets/dp.png')} style={styles.dp}/>
      </View>
    )
}

const styles = StyleSheet.create({
    appIcon: {
        height: 28,
        width: 28
    },
    appIconContanier:{
        backgroundColor: '#fff',
        height: 44,
        width: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dp: {
        height: 44,
        width: 44,
        borderRadius: 22
    },
    contanier: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
