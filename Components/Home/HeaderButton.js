import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function HeaderButton(props) {
  return (
    <TouchableOpacity
      style={{
        ...Styles.screen,
        backgroundColor: props.Tab == props.text ? 'black' : 'white',
      }}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text
        style={{
          color: props.Tab == props.text ? 'white' : 'black',
          fontSize: 18,
          fontWeight: '700',
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  screen: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 36,
  },
});
