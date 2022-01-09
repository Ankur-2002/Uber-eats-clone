import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { useSelector } from 'react-redux';
import { Item } from '../Components/About/Menus';
import { useDispatch } from 'react-redux';
export default function OrderComplete() {
  const state = useSelector(state => state.cart.selectItem);
  const Dispatch = useDispatch();
  // console.log(state, 'Redux');
  useEffect(() => {
    // var t =
    return () => {
      Dispatch({ type: 'CLEAR_CART' });
    };
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
      <LottieView
        style={{
          height: 150,
          alignSelf: 'center',
          marginBottom: 30,
          // width: ,
        }}
        source={require('../assets/Animation/CheckMark.json')}
        autoPlay
        speed={0.5}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
          }}
        >
          Your Order at {state.resturantName} has been places for ${state.price}
        </Text>
        {state.items.map((item, index) => (
          <Item
            key={index}
            checkbox={'No'}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ScrollView>
      <LottieView
        style={{
          height: 150,
          alignSelf: 'center',
          // marginBottom: 30,
          // position: 'absolute',
          bottom: 0,
          width: '100%',
          // width: ,
        }}
        source={require('../assets/Animation/Cooking.json')}
        autoPlay
        speed={0.5}
        loop={true}
      />
    </SafeAreaView>
  );
}
