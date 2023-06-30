import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BackButton(props) {
  const navigation = useNavigation();

  return (
    <Ionicons
      name="ios-arrow-back"
      size={22}
      color={props.arrowColor}
      style={{
        padding: 13,
        backgroundColor: props.backColor,
        borderRadius: 12,
      }}
      onPress={() => navigation.goBack()}
  />
  )
}
