import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import MainButton from '../../components/MainButton';
import ImageUploadButton from '../../components/ImageUploadButton';

export default function PostServices() {
  const navigation = useNavigation();
  const [descriptionValue, setDescriptionValue] = useState('');
  const [locationStatus, setLocationStatus] = useState(false)

  const handleChange = (text) => {
    setDescriptionValue(text);
  };

  const handleSetLocation = () => {
    navigation.navigate('Set Location');
  }
  return (
    <SafeAreaView style={{backgroundColor: "white"}}>
      <ScrollView>
        <View style={styles.header}>
          <BackButton arrowColor="black" backColor="#F6F6F6" />
          <Text style={styles.headerTitle}>Post Service 🔥</Text>
        </View>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Cleaning</Text>
          <Image source={require("../../../assets/imags/cleaning.png")} />
        </View>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.subTitle}>Service Description</Text>
            <TextInput
              multiline={true}
              value={descriptionValue}
              onChangeText={handleChange}
              style={styles.descriptionArea}
              textAlignVertical="top"
              placeholder="Enter the issue here"
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTitle}>Choose location</Text>
            <TouchableOpacity onPress={handleSetLocation}>
              <View style={styles.locationComponent}>
                <View style={styles.locationPin}>
                  <EvilIcons 
                    name="location" 
                    size={22} 
                    color='rgba(35, 35, 35, 0.5)' />
                  <Text style={styles.locationText}>{locationStatus ? '' : 'Choose location'}</Text>
                </View>
                <Image source={require('../../../assets/imags/locator.png')} alt="locator" style={styles.locatorMark} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTitle}>Upload images (up to 4)</Text>
            <Text style={styles.uploadCaption}>
              This is optional, but if you add a sample photo of the issue then this will be a plus.
            </Text>
            <View style={styles.uploadBox}>
              <ImageUploadButton height={140} />
              <ImageUploadButton height={140} />
              <ImageUploadButton height={140} />
              <ImageUploadButton height={140} />
            </View>
          </View>
          <MainButton title="Post now" />
        </View>
      </ScrollView>
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
  },
  headerTitle: {
    width: '100%',
    textAlign: 'center',
    paddingRight: 50,
    fontSize: 18,
    fontWeight: 700,
  },
  banner: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 14,
    backgroundColor: "#232323",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bannerText: {
    color: "white",
    fontSize: 20,
    fontWeight: 700
  },
  container: {
    padding: 20,
    display: 'flex',
    gap: 20
  },
  subContainer: {
    display: 'flex',
    gap: 10
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: '#232323'
  },
  locationComponent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(191, 191, 191, 0.6)',
    borderRadius: 14,
    padding: 10,
  },
  locationPin: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  locationText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#232323'
  },
  locatorMark: {
    width: 22,
    height: 22
  },
  descriptionArea: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#BFBFBF',
    borderRadius: 14,
    paddingTop: 15,
    paddingLeft: 20,
    height: 107,
  },
  uploadCaption: {
    fontSize: 14,
    fontWeight: 500,
    color: '#A5A5A5',
    backgroundColor: 'rgba(158, 233, 112, 0.15)',
    paddingVertical: 11,
    paddingHorizontal: 9,
  },
  uploadBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
