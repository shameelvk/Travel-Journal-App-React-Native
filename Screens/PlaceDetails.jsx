import { useEffect, useState } from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Colors } from '../constants/Colors';

function PlaceDetails({ route }) {
    console.log(route);
  const [location, setLocation] = useState(null);
  useEffect(() => {
    const { place } = route.params;
    setLocation(place?.location); 
  }, [route.params]);

  return (
    <ScrollView>
      <View style={styles.locationContainer}>
        <Text style={{fontSize:20,color:"white"}}>{route.params.place.title}</Text>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>Latitude: {location?.lat}</Text>
          <Text style={styles.address}>Longitude: {location?.lng}</Text>
        </View>
        <Image style={styles.image} source={{ uri: route.params.place.imageUri }} />
      
        
        {location && ( 
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.lat,
              longitude: location.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              title={route.params.place.title || 'Place Location'} 
              coordinate={{
                latitude: location.lat,
                longitude: location.lng,
              }}
            />
          </MapView>
        )}
        
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  map: {
    flex:1,
    width: '100%',
    height: 400,
  },
});
