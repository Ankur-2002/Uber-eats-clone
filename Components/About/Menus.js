import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
const MenuItems = [
  {
    title: 'Baked Chicken Drumsticks',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/delish-190808-baked-drumsticks-0217-landscape-pf-1567089281.jpg',
    description:
      'Add all the marinade ingredients to a bowl and mix until fully combined, set aside.',
    price: '213',
  },
  {
    title: 'Burger',
    image:
      'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg',
    description:
      'Add all the marinade ingredients to a bowl and mix until fully combined, set aside.',
    price: '343',
  },
  {
    title: 'Pizza',
    image:
      'https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg',
    description:
      'Add all the marinade ingredients to a bowl and mix until fully combined, set aside.',
    price: '64',
  },
  {
    title: 'Fried Rice',
    image:
      'https://www.jessicagavin.com/wp-content/uploads/2018/09/fried-rice-8-1200.jpg',
    description:
      'Add all the marinade ingredients to a bowl and mix until fully combined, set aside.',
    price: '65',
  },
  {
    title: 'Hard Boiled Eggs',
    image:
      'https://recipesformen.com/wp-content/uploads/2019/10/egg-salad9.jpg',
    description:
      'Add all the marinade ingredients to a bowl and mix until fully combined, set aside.',
    price: '34',
  },
  {
    title: 'Baked Chicken',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/delish-190808-baked-drumsticks-0217-landscape-pf-1567089281.jpg',
    description:
      'Add all the marinade ingredients to a bowl and mix until fully combined, set aside.',
    price: '213',
  },
];

export const Item = props => {
  const Dispatch = useDispatch();
  const onSelect = (item, checkbox) => {
    return Dispatch({
      type: 'ADD_CART',
      payload: {
        items: { ...item, checkbox },
        resturantName: props.resturantName,
        // checkbox: checkbox,
      },
    });
  };
  // console.log(props.checkbox, 'checkbox');
  return (
    <>
      <View style={styles.container}>
        {props.checkbox != 'No' ? (
          <BouncyCheckbox
            iconStyle={{ borderRadius: 0 }}
            fillColor="green"
            isChecked={props.checkbox}
            onPress={checkbox => {
              onSelect(props, checkbox);
            }}
          />
        ) : null}
        <Details
          title={props.title}
          description={props.description}
          price={props.price}
        />
        {/* Image Part */}
        <ImageItem image={props.image} />
      </View>
      <Divider width={1.8} color="#eee" />
    </>
  );
};
// MenuItems.map((item, index) => (
//
//   ));
export default function Menus({ resturantName }) {
  const State = useSelector(state => state.cart.selectItem.items);

  const i = MenuItems.map(element => {
    const index = State.findIndex(item => item.title === element.title);
    if (index !== -1) {
      return State[index] ? State[index].checkbox : false;
    }
    return false;
  });

  // <FlatList  />
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{}}
      keyExtractor={(item, index) => index.toString()}
      data={MenuItems}
      renderItem={item => {
        return (
          <Item
            checkbox={i[item.index]}
            image={item.item.image}
            title={item.item.title}
            price={item.item.price}
            description={item.item.description}
            resturantName={resturantName}
          />
        );
      }}
    />
  );
}

const ImageItem = props => (
  <View style={styles.imageContainer}>
    <Image source={{ uri: props.image }} style={styles.image} />
  </View>
);
const Details = props => {
  return (
    <View style={styles.detail}>
      <Text style={{ fontSize: 18, fontWeight: '700' }}>{props.title}</Text>
      <Text style={{ fontSize: 13, fontWeight: '600', marginVertical: 5 }}>
        {props.description}
      </Text>
      <Text
        style={{
          fontSize: 13,
          // fontWeight: '0',
        }}
      >
        ${props.price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    overflow: 'hidden',
    marginHorizontal: 5,
    marginVertical: 15,
  },
  detail: {
    flex: 1,
    justifyContent: 'space-around',
    // width: '70%',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 20,
  },
  imageContainer: {
    flex: 0.5,
    marginHorizontal: 20,
  },
});
