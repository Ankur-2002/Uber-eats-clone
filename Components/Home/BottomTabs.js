import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,
      }}
    >
      <Icons name="home" text="Home" />
      <Icons name="search" text={'Browse'} />
      <Icons name="shopping-bag" text={'Grocery'} />
      <Icons name="receipt" text={'Orders'} />
      <Icons name="user" text={'Account'} />
    </View>
  );
}

const Icons = props => {
  return (
    <TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <FontAwesome5 name={props.name} size={20} color="black" />
        <Text
          style={{
            fontSize: 12,
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
