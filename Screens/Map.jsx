import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import IconeButton from '../components/UI/IconeButton';

const Map = ({navigation}) => {
    const [selectLocation, setSelectLocation] = useState();

    const initalregion = {
        latitude: 20.5937,
        longitude: 78.9629,
        latitudeDelta: 0.1902,
        longitudeDelta: 0.0421,
      };

      function selectLocationHandler(event) {
        console.log(event);
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;
    
        setSelectLocation({ lat: lat, lng: lng });
      }

      const savePickedLocationHandler = useCallback(() => {
        if (!selectLocation) {
          Alert.alert(
            'No location picked!',
            'You have to pick a location (by tapping on the map) first!'
          );
          return;
        }
    
        navigation.navigate('AddPlace', {
          pickedLat: selectLocation.lat,
          pickedLng: selectLocation.lng,
        });
      }, [navigation, selectLocation]);


      useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: ({ tintColor }) => (
            <IconeButton
              icone="save"
              size={24}
              color={tintColor}
              onPress={savePickedLocationHandler}
            />
          ),
        });
      }, [navigation, savePickedLocationHandler]);



  return (
    <MapView style={styles.map} initialRegion={initalregion} onPress={selectLocationHandler}>
        {selectLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectLocation.lat,
            longitude: selectLocation.lng,
          }}
        />
      )}
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({
    map:{
        flex:1
    }
})