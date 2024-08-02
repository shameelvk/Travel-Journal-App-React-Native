import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PlaceItem from './PlaceItem';
import { Colors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const PlacesList = ({ places }) => {
  const navigation = useNavigation();

  const handleSelected = (place) => {
    navigation.navigate('PlaceDetails', {
      place: place,
    });
  };

  if (!places || places.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No places added yet - start adding some!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={handleSelected} />
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5', 
  },
  text: {
    fontSize: 18,
    color: Colors.primary500,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
});
