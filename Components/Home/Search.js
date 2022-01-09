import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
// import { An } from 'react-native-vector-icons/AntDesign';
export default function Search({ CityHandler }) {
  const refs = React.useRef();

  return (
    <View
      style={{
        marginTop: 5,
        flexDirection: 'row',
      }}
    >
      <GooglePlacesAutocomplete
        query={{
          key: 'AIzaSyBEkUrwwv3PtxWfKc6oR2Rn3w4w8BKb1JU',
        }}
        onPress={(data, details = null) => {
          // CityHandler(data.description);
          // CityHandler
        }}
        // getAddressText={(data, details) => {
        //   console.log(data);
        // }}
        ref={refs}
        placeholder="Enter the City"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,

            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View
            style={{
              marginLeft: 10,
            }}
          >
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => {
          return (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',

                borderRadius: 50,
                alignItems: 'center',
                paddingVertical: 7,
                paddingHorizontal: 10,
                marginRight: 10,
              }}
              onTouchStart={() => {
                CityHandler(refs.current.getAddressText());
              }}
            >
              <AntDesign
                name="clockcircle"
                size={18}
                color="black"
                style={{
                  marginRight: 4,
                }}
              />
              <Text
                style={{
                  fontWeight: '700',
                }}
              >
                Search
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
