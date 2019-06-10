import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CityList from './CityList';
import WeatherDetailScreen from './WeatherDetailScreen';

const AppNavigator = createStackNavigator(
  {
    CityList: CityList,
    Detail: WeatherDetailScreen,
  },
  {
    initialRouteName: 'CityList',
  }
);

export default createAppContainer(AppNavigator);
