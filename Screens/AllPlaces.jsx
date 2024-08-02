import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import PlacesList from '../components/Places/PlacesList';
import { useIsFocused } from '@react-navigation/native';

const AllPlaces = ({ route }) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const [processedParams, setProcessedParams] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params && route.params.place && route.params.place !== processedParams) {
      const { place } = route.params;

       if (place.title && place.imageUri && place.location) {
        setLoadedPlaces((prev) => [...prev, place]);
        setProcessedParams(place);  
      }
    }
  }, [isFocused, route, processedParams]);

  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;

const styles = StyleSheet.create({});
