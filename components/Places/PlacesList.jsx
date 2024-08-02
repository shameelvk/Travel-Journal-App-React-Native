import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'
import { Colors } from '../../constants/Colors';
import { useNavigation, useRoute } from '@react-navigation/native';

const PlacesList = ({places}) => {
  const navigation=useNavigation();
    const handleSelected=(place)=>{
      navigation.navigate('PlaceDetails', {
        place: place,
      });
    }
  if (!places || places.length === 0) {
    return (
      <View style={styles.Container}>
        <Text style={styles.Text}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }
  return (
   <FlatList data={places} keyExtractor={(item)=>item.id} renderItem={({item})=><PlaceItem place={item} onSelect={handleSelected}/>}/>
  )
}

export default PlacesList

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 16,
    color:Colors.primary200
  },
})