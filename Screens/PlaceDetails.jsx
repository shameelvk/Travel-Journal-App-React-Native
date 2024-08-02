import { useEffect, useState } from "react";
import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Colors } from "../constants/Colors";

function PlaceDetails({ route }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const { place } = route.params;
    setLocation(place?.location);
  }, [route.params]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>
          {route.params.place.title}
        </Text>
        <Image
          style={styles.image}
          source={{ uri: route.params.place.imageUri }}
        />
        <View style={styles.addressContainer}>
          <Text style={styles.addressLabel}>Latitude:</Text>
          <Text style={styles.addressValue}>{location?.lat}</Text>
          <Text style={styles.addressLabel}>Longitude:</Text>
          <Text style={styles.addressValue}>{location?.lng}</Text>
        </View>
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
              title={route.params.place.title || "Place Location"}
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
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: Colors.primary50,
  },
  detailsContainer: {
    width: "90%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary500,
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: "cover",
  },
  addressContainer: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary100,
    paddingBottom: 10,
  },
  addressLabel: {
    fontWeight: "bold",
    color: Colors.primary500,
    fontSize: 16,
  },
  addressValue: {
    fontSize: 16,
    color: Colors.primary700,
  },
  map: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginTop: 15,
  },
});
