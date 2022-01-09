import AnimatedLottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import ModalItem from './ModalItem';

export default function ViewButton({ navigation }) {
  const [ModalVisible, setModalVisible] = useState(false);
  const [Loading, setLoading] = useState(false);
  const { price, items, resturantName } = useSelector(
    state => state.cart?.selectItem
  );
  const State = price;
  return (
    <>
      {Loading ? (
        <AnimatedLottieView
          style={{
            // height: 100,
            position: 'absolute',
            bottom: 0,
            //  top: 50%,
            borderWidth: 1,

            height: '100%',
            widht: '100%',
            alignSelf: 'center',
            alignItems: 'center',
          }}
          source={require('../../assets/Animation/Scanner.json')}
          autoPlay
          loop={true}
          speed={0.5}
        />
      ) : null}

      <Modal
        visible={ModalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
        transparent={true}
        animationType="slide"
      >
        <ModalItem
          text={resturantName}
          setModalVisible={setModalVisible}
          items={items}
          price={price}
          navigation={navigation}
          setLoading={setLoading}
        />
      </Modal>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            width: '80%',
          }}
          activeOpacity={0.5}
          onPress={() => setModalVisible(true)}
        >
          {State ? (
            <View
              style={{
                backgroundColor: '#000',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
                padding: 10,
                position: 'relative',
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                }}
              >
                View Cart
              </Text>

              <Text
                style={{
                  position: 'absolute',
                  right: 20,
                  fontSize: 18,
                  color: '#fff',
                }}
              >
                ${price}
              </Text>
            </View>
          ) : null}
        </TouchableOpacity>
      </View>
    </>
  );
}
