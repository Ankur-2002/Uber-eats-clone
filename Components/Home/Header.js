import React, { useState } from 'react';
import { SafeAreaView, Button, StyleSheet } from 'react-native';
import HeaderButton from './HeaderButton';

export default function Header({ ActiveTab, setActiveTab }) {
  return (
    <SafeAreaView
      style={{
        ...Styles.screen,
      }}
    >
      <HeaderButton
        text={'Delivery'}
        color={'white'}
        Tab={ActiveTab}
        setActiveTab={setActiveTab}
        backgroundColor={'black'}
      />
      <HeaderButton
        text={'Pickup'}
        Tab={ActiveTab}
        setActiveTab={setActiveTab}
        color={'black'}
        backgroundColor={'white'}
      />
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  screen: {
    marginVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
