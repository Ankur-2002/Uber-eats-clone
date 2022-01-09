import React from 'react';
import { View, Text, Image } from 'react-native';

const YelpResturantData = {
  image:
    'https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/le-cirque-table.jpg',
  name: 'Farmhouse Kitchen Thai Cuisine',

  rating: '',
  price: '',
  reviews: '',
  categories: [
    {
      title: 'Thai',
    },
    {
      title: 'Vegetarian',
    },
    {
      title: 'Vegan',
    },
  ],
};

export default function Details({ data }) {
  const { name, image, categories, price, reviews, rating } = data[1].params;
  const Title = name;
  const DescriptionText = categories
    ?.map(category => category.title)
    .join(' * ');

  const Description = `${DescriptionText}  ${
    price ? ` * ${price}` : ''
  } * 🎫 * ${rating} * 📝 * ${reviews}`;
  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: '100%',
          height: 150,
          //   resizeMode: 'cover',
        }}
      />
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          marginTop: 10,
          marginHorizontal: 15,
        }}
      >
        {Title}
      </Text>
      <Text
        style={{
          marginTop: 10,
          marginHorizontal: 15,
          fontSize: 15.5,
          fontWeight: '600',
        }}
      >
        {Description}
      </Text>
    </View>
  );
}
