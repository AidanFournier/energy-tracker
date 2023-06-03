import { View, Text } from 'react-native'
import React,{useState, useEffect} from 'react';

const HomeScreen = () => {

const getConsumptionFromApi = () => {
    const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://kraken-japan-hackathon-api.onrender.com/products/AGILE-23-06-01/product_rates/consumption_charges';

    return fetch(corsAnywhereUrl + apiUrl)
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  };

  getConsumptionFromApi().then(data => console.log(data));


  return (
    <View className="flex-row justify-center">
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen;
