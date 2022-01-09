import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { app as Firebase } from '../../Firebase';
const OrderList = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingBottom: 15,
        borderBottomColor: '#ccc',
        marginVertical: 8,
        marginHorizontal: 10,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
        }}
      >
        {item.title}
      </Text>
      <Text>${item.price}</Text>
    </View>
  );
};
export default ModalItem = ({
  items,
  text,
  setModalVisible,
  price,
  navigation,
  setLoading,
}) => {
  const Dispatch = useDispatch();

  const SendOrder = async () => {
    // console.log(Firebase);
    try {
      const db = Firebase.firestore();
      setLoading(true);
      setModalVisible(false);

      await db
        .collection('orders')
        ?.add({
          items: items,
          resturantName: text,
          price: price,
          createAt: new Date().toISOString(),
        })
        .then(() => {
          setTimeout(() => {
            setLoading(false);
            navigation.replace('OrderComplete');
          }, 2000);
        });
      // Dispatch({ type: 'CLEAR_CART' });
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.Subcontainer}>
        <Text style={Styles.Title}>{text}</Text>
        {items.map(item => {
          return <OrderList item={item} key={item.title} />;
        })}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
            }}
          >
            Subtotal
          </Text>
          <Text>${price}</Text>
        </View>
        <TouchableOpacity
          style={Styles.Button}
          activeOpacity={0.9}
          onPress={() => SendOrder()}
        >
          <Text style={Styles.text}>{'Checkout'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  Subcontainer: {
    height: 500,
    backgroundColor: '#fff',
    padding: 16,
    borderWidth: 1,
  },
  Button: {
    width: '90%',
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  Title: {
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
    padding: 5,
  },
});
