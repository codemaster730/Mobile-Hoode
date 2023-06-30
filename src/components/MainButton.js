import React from 'react'
import { StyleSheet, Text, TouchableOpacity  } from 'react-native'

export default function MainButton(props) {
  return (
    <TouchableOpacity style={styles.mainButton} onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainButton: {
    borderRadius: 90,
    backgroundColor: "#9EE970",
    width: '100%',
    alignItems: 'center', 
    paddingVertical: 17
  },
  title: {
    fontSize: 16,
    fontWeight: 600
  }
})
