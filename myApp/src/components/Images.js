import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'

const Images = () => {
  return (
    <View
    // style={{ backgroundColor: "yellow" }}
    >
      <Image
        source={require('../assests/shiv.png')}
        style={styles.logo}
      />
    </View>
  )
}

export default Images;

const styles = StyleSheet.create({
  logo: {
    // flex: 0.25,
    resizeMode: 'contain',
    width: 300,
    height: 200,
    // marginBottom: 20,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "green"
  },
})