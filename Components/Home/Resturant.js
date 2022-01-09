import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export const ResturantItems = [
  {
    image:
      'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2936%2Ftrend20200911120002.jpg',
    name: 'Tummy Tull Kitchen',
    rating: '4.5',
    time: '30 - 45 min',
  },
  {
    image:
      'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2936%2Ftrend20200911120002.jpg',
    name: 'Burger King',
    rating: '5.0',
    time: '20 - 30 min',
  },
];
const ImageView = props => {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{
          height: 200,
          width: '100%',
        }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 20,
          top: 20,
        }}
      >
        <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 18,
              marginTop: 3,
              fontWeight: 'bold',
            }}
          >
            {props.name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '700',
              color: 'grey',
            }}
          >
            {props.time}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#eee',
            borderRadius: 50,
            width: 35,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'grey',
              fontSize: 17,
              fontWeight: 'bold',
            }}
          >
            {props.rating}
          </Text>
        </View>
      </View>
    </>
  );
};

export default function Resturant(props) {
  if (!props.ResturantItems || props.ResturantItems.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
          }}
        >
          This City is Not Register!!!
        </Text>
      </View>
    );
  } else
    return props.ResturantItems?.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.9}
          style={{
            marginBottom: 10,
          }}
          onPress={() => {
            props.navigation.navigate('About', {
              name: item.name,
              image: item.image_url,
              rating: item.rating,
              reviews: item.review_count,
              price: item.price,
              categories: item.categories,
            });
          }}
        >
          <View
            style={{
              marginTop: 10,
              padding: 15,
              backgroundColor: '#fff',
            }}
          >
            <ImageView
              image={item.image_url}
              name={item.name}
              rating={item.rating}
              time={'20 - 40 min'}
            />
          </View>
        </TouchableOpacity>
      );
    });
}
