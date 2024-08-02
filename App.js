import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './Screens/AllPlaces';
import AddPlace from './Screens/AddPlace';
import { Colors } from './constants/Colors';
import IconeButton from './components/UI/IconeButton';
import Map from './Screens/Map';
import PlaceDetails from './Screens/PlaceDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: 'Your Favorite Places',
              headerRight: ({ tintColor }) => (
                <IconeButton
                  icone="add"
                  size={24}
                  color={"black"}
                  onPress={() => navigation.navigate('AddPlace')}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: 'Add a new Place',
            }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
           
          />
          <Stack.Screen
            name="PlaceDetails"
            component={PlaceDetails}
           
          />
        </Stack.Navigator>
      </NavigationContainer>
   );
}

export default App