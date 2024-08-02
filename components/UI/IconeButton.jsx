import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const IconeButton = ({icone,size,color,onPress}) => {
    
  return (
   <Pressable style={(pressed)=>[styles.button,pressed&&styles.press]} onPress={onPress}>
    <Ionicons name={icone} size={30} color={color} />
   </Pressable>
  )
}

export default IconeButton

const styles = StyleSheet.create({
    button:{
        padding:8,
        margin:4,
        justifyContent:"center",
        alignItems:"center"
    },
    press:{
        opacity:0.7
    }
})