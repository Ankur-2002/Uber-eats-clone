import React from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';

const Items = [
  {
    image: require('../../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../../assets/images/soft-drink.png'),
    text: 'Soft Drink',
  },
  {
    image: require('../../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../../assets/images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    image: require('../../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../../assets/images/desserts.png'),
    text: 'Desserts',
  },
];
export default function Categories() {
  return (
    <View
      style={{
        paddingVertical: 10,
        backgroundColor: '#fff',
        paddingLeft: 20,
        flex: 0,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          contentContainerStyle={{
            alignSelf: 'flex-start',
          }}
          numColumns={Items.length}
          keyExtractor={item => item.text}
          data={Items}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={item => {
            return (
              <View
                style={{
                  marginHorizontal: 5,
                  alignItems: 'center',
                }}
              >
                <Image
                  source={item.item.image}
                  style={{ resizeMode: 'contain', width: 50, height: 50 }}
                />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '700',
                  }}
                >
                  {item.item.text}
                </Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
}
