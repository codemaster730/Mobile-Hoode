import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';

export default ImageUploadButton = (props) => {
  return (
    <View style={{
      height: props.height,
      width: '22%',
      borderRadius: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderStyle: 'dashed',
      borderColor: '#BFBFBF'
    }}>
      <Entypo name="plus" size={22} color="black" />
    </View>
  )
}
