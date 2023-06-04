import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import React,{useState, useEffect} from 'react';
import { ProgressChart } from 'react-native-chart-kit'

const data = {
  labels: ["sample", "banana"],
  data: [0.4, 0.6]
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  cards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20
  }
});

const HomeScreen = () => {
  const baseUrl = 'https://kraken-japan-hackathon-api.onrender.com';

  // product rate fetch
  // return the price (in yen) of kWh (kilowatt-hour)/ 30 minutes slot for the next 10 days
  const getProductRateFromApi = () => {
    const productCode = 'AGILE-23-06-01';
    const rateType = 'consumption_charges';
    const apiUrl = `${baseUrl}/products/${productCode}/product_rates/${rateType}`;

    return fetch(apiUrl)
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  };

  getProductRateFromApi().then(data => console.log(data));

  // consumption fetch
  // return how much kWh used by the consumer in a given period of time
  const getConsumptionFromApi = () => {
    // spin is required and identifies the user
    const spin = '0300111001601606060001';
    // period is optional but if not specified return all the pages
    const periodFrom = '2023-06-02T06:00:00+09:00';
    const periodTo = '2023-06-02T07:00:00+09:00';

    const apiUrl = `${baseUrl}/supply_points/${spin}/consumption?period_from=${encodeURIComponent(periodFrom)}&period_to=${encodeURIComponent(periodTo)}`;

    return fetch(apiUrl)
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  };


  return (
    <View className=" flex item-center bg-slate-900 h-full">
      <View className=" mx-60 mt-8">
        <View className=" flex-row w-32 h-16 border-2 border-violet-700 rounded-full justify-center">
          {/* <View className="w-8 h-8 rounded-full bg-violet-400"></View> */}
          <Text className="text-cyan-300 text-[18px] font-bold mt-4 ">10,000</Text>
        </View>
      </View>
      <View className="flex flex-row bg-violet-700 h-12 w-82 rounded-full pt-3 mt-4 mx-5 justify-center">
        <TouchableOpacity className="mx-6">
          <Text className="text-violet-100 text-[16px] font-bold">Day</Text>
        </TouchableOpacity>
          <TouchableOpacity className="mx-6">
          <Text className="text-violet-100 text-[16px] font-bold">Week</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mx-6">
          <Text className="text-violet-100 text-[16px] font-bold">Year</Text>
        </TouchableOpacity>
      </View>
      <View >
        <ProgressChart
          data={{
            labels: [],
            data: [0.4, 0.6]
          }}
          width={Dimensions.get("window").width}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={{
            backgroundGradientFrom: "#5f08a3",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(211, 61, 244, ${opacity})`,
            strokeWidth: 3, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // op
          }}
          hideLegend={ false}
        />
      </View>
      <View className="flex flex-row">
        <View className="flex mx-6">
          <View className=" bg-violet-700 w-40 h-24 my-4 rounded-[24px] ">
            <Text className="text-cyan-100 flex justify-center mt-4 mb-2 text-[16px] font-extrabold">SAVED</Text>
            <View className="flex flex-row justify-center">
              <Text className="text-cyan-300 font-bold text-[32px] mx-2 flex items-center">2.75</Text>
              <Text className="text-cyan-100 font-bold text-[12px] mx-2 flex items-center">kwH</Text>
            </View>
          </View>
          <View className=" bg-violet-700 w-40 h-24 my-4 rounded-[24px] ">
            <Text className="text-cyan-100 flex justify-center mt-4 mb-2 text-[16px] font-extrabold">SPENT</Text>
            <View className="flex flex-row justify-center">
              <Text className="text-cyan-300 font-bold text-[32px] mx-2 flex items-center">1.55</Text>
              <Text className="text-cyan-100 font-bold text-[12px] mx-2 flex items-center">kwH</Text>
            </View>
          </View>
        </View>
        <View className="bg-violet-600 w-40 h-58 my-4 rounded-[24px] flex justify-center items-center">
          <Text className="text-violet-100 text-[24px] font-bold">1,305</Text>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen;
