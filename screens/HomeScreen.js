import { View, Text, TouchableOpacity } from 'react-native'
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
    <View className=" flex item-center bg-slate-900 h-full">
      <View className=" mx-60 mt-8">
        <View className=" flex-row w-32 h-16 border-2 border-violet-700 rounded-full justify-center">
          {/* <View className="w-8 h-8 rounded-full bg-violet-400"></View> */}
          <Text className="text-cyan-300 text-[18px] font-bold mt-4 ">10,000</Text>
        </View>
      </View>
      <View className="flex flex-row bg-violet-700 h-16 w-82 rounded-full pt-5 mt-4 mx-5 justify-center">
        <TouchableOpacity className="mx-6">
          <Text className="text-violet-100 text-[18px] font-bold">Day</Text>
        </TouchableOpacity>
          <TouchableOpacity className="mx-6">
          <Text className="text-violet-100 text-[18px] font-bold">Week</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mx-6">
          <Text className="text-violet-100 text-[18px] font-bold">Year</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen;
