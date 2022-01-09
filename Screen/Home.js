import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import BottomTabs from '../Components/Home/BottomTabs';
import Categories from '../Components/Home/Categories';
import Header from '../Components/Home/Header';
import Resturant, { ResturantItems } from '../Components/Home/Resturant';
import Search from '../Components/Home/Search';

const API_KEY =
  '7YoYMSoO5MOlWlQBvC4FMRPKg5RCUaAc6ZxGPsI52G0PtZnPFHzhVGJ4fm3pgjbCHJodiVSexf9kAaLrZLeP1XRz9spcfrwNEhG6drzH2oVz8h2BvgxwFCjE8ZnXYXYx';

const Home = ({ navigation }) => {
  const [categories, setCategories] = React.useState([ResturantItems]);
  const [City, CityHandler] = useState('');
  const [ActiveTab, setActiveTab] = useState('Delivery');
  const FetchData = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${
      City ? City : 'Los Anglos'
    }&categories=restaurants&limit=10`;
    const ApiOptions = {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    };
    return await fetch(yelpUrl, ApiOptions)
      .then(response => response.json())
      .then(responseJson => {
        setCategories(responseJson?.businesses);
      })
      .catch(er => console.log(er));
  };
  React.useEffect(() => {
    FetchData();
  }, [City]);
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#eee',
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
        }}
      >
        <Header ActiveTab={ActiveTab} setActiveTab={setActiveTab} />
        <Search CityHandler={CityHandler} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <Categories />
        <Resturant
          ResturantItems={categories?.filter(item =>
            item?.transactions?.includes(ActiveTab.toLocaleLowerCase())
          )}
          navigation={navigation}
        />
      </ScrollView>

      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
