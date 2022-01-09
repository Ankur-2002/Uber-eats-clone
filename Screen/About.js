import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import Details from '../Components/About/Details';
import Menus from '../Components/About/Menus';
import ViewButton from '../Components/About/ViewButton';
// import { useSelector, useDispatch } from 'react-redux';
export default function About({ navigation }) {
  // const state = useSelector(state => state);
  // console.log(state, 'Redux');
  return (
    <View style={{ flex: 1 }}>
      <Details data={navigation.getState().routes} />
      <Divider
        width={1.8}
        style={{
          marginTop: 10,
        }}
      />
      <Menus resturantName={navigation.getState().routes[1].params.name} />
      <ViewButton navigation={navigation} />
    </View>
  );
}
