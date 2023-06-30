import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, View, Text, Alert } from "react-native";
import { PhoneInput, getCountryByCca2 } from 'react-native-international-phone-number';
import BackButton from '../components/BackButton';
import MainButton from '../components/MainButton';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [selectedCountry, setSelectedCountry] = useState(getCountryByCca2('SA'));
  const [inputValue, setInputValue] = useState('');

  const navigation = useNavigation();

  const handleInputValue = (phoneNumber) => {
    setInputValue(phoneNumber);
  }

  const handleSelectedCountry = (country) => {
    setSelectedCountry(country);
  }

  const handleSendCode = () => {
    navigation.navigate('Post Services');
  }

  return (
    <SafeAreaView style={{backgroundColor: "white"}}>
      <View style={ styles.header }>
        <BackButton arrowColor="black" backColor="#F6F6F6" />
        <Text>English</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Welcome Back To Hoode</Text>
          <Text style={styles.subTitle}>We will send you one time code to verify on this mobile number</Text>
        </View>
        <View style={{ width: '100%'}}>
          <PhoneInput
            value={inputValue}
            defaultCode="SA"
            onChangePhoneNumber={handleInputValue}
            selectedCountry={selectedCountry}
            onChangeSelectedCountry={handleSelectedCountry}
            inputStyle={{
              color: '#BFBFBF',
              paddingLeft: 15,
              paddingVertical: 0
            }}
            containerStyle={{
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: '#BFBFBF',
              borderRadius: 14,
              padding: 11,
              height: 52
            }}
            flagContainerStyle={{
              justifyContent: 'center',
              borderRightWidth: 2,
              borderStyle: 'solid',
              borderColor: "#BFBFBF",
              paddingRight: 15
            }}
          />
        </View>
        <MainButton title="Send code" onPress={ () => handleSendCode() } />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 26,
    paddingBottom: 30,
    paddingRight: 20,
    paddingLeft: 20,
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  },
  container: {
    paddingTop: 0,
    paddingBottom: 343,
    paddingRight: 20,
    paddingLeft: 20,
    display: "flex",
    gap: 30
  },
  titleBox: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  }, 
  title: {
    fontSize: 34,
    lineHeight: 50,
    fontWeight: 700,
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 400,
    color: "#BFBFBF"
  }
})

