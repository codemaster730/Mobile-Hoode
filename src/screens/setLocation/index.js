import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Circle } from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import { EvilIcons } from '@expo/vector-icons';
import BackButton from '../../components/BackButton';
import MainButton from '../../components/MainButton';
import locationPin from '../../../assets/imags/locationPin.png'

export default SetLocation = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [country, setCountry] = useState("Saudi Arabia")
  const [city, setCity] = useState("Riyadh 20")

  const location = {
    latitude: region.latitude,
    longitude: region.longitude,
  };

  const onRegionChange = (newRegion) => {
    setRegion(newRegion);
  };


  return (
    <View style={{position: 'relative'}}>
      <View style={styles.header}>
        <BackButton arrowColor="black" backColor="#F6F6F6" />
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        onRegionChange={onRegionChange}
      >
        <Marker coordinate={location} image={locationPin} style={styles.markerImage} />
        {/* <Circle
          center={location}
          radius={2000}
          fillColor={'rgba(35, 35, 35, 0.08)'}
          strokeColor={'rgba(35, 35, 35, 0.08)'}
        /> */}
      </MapView>
      <View  style={styles.circleLocator}>
        <Image source={require('../../../assets/imags/locator.png')} alt="circleLocator" style={{width: 22, height: 22}} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Select Your Location</Text>
        <View style={styles.locationDetail}>
          <Text style={styles.text}>Your Location</Text>
          <View style={styles.locationBox}>
            <EvilIcons 
              name="location" 
              size={22} 
              color='rgba(35, 35, 35, 0.5)' />
            <Text style={styles.locationText}>{city + ", " + country}</Text>
          </View>
          <MainButton title="Confirm location & proceed" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 26,
    paddingBottom: 30,
    paddingRight: 20,
    paddingLeft: 20,
    position: 'absolute',
    top: 0,
    zIndex: 100
  },
  map: {
    width: '100%',
    height: '100%',
    // flex: 1
  },
  markerImage: {
    width: 50,
    height: 50
  },
  circleLocator: {
    padding: 13,
    backgroundColor: "#9EE970",
    position: 'absolute',
    bottom: 250,
    right: 20
  },  
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    white: '100%',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    display: 'flex',
    gap: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: '#232323'
  },
  text: {
    fontSize: 14,
    fontWeight: 500,
    color: 'rgba(35, 35, 35, 0.5)'
  },
  locationDetail: {
    display: 'flex',
    gap: 15
  }, 
  locationBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  }
})
