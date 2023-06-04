import { View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Surface, Button} from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {

  LineChart

} from "react-native-chart-kit";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  cards: {
    justifyContent: 'center',
    alignItems: 'start',
    flexDirection: 'row',
    gap: 20
  }
});

const StatsScreen = () => {
  return (
    <>
      <View className="bg-slate-900">
        <View className="mx-60 mt-8">
          <View className=" flex-row w-32 h-16 border-2 border-violet-700 rounded-full justify-center mt-12">
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
      </View>

      <View style={styles.container} className="bg-slate-900 flex-1 justify-center align-center px-2">
        <LineChart
          data={{
          labels: ["Mon", "Tues", "Wed", "Thur" ,"Fri","Sat", "Sun"],
          legend: ['Avg Consumption', 'Your Consumption'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ],color: (opacity = 1) => `rgb(173, 216, 230)`
            },
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ],color: (opacity = 1) => `rgb(240, 240, 240)`
            }
          ]
          }}
          width={400} // from react-native
          height={300}
          backgroundColor="rgba(13, 1, 36, 0.520833)"
          yAxisLabel=""
          yAxisSuffix="kwh"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: "#08130D",
            backgroundGradientFromOpacity: 0.5,  //set it to 0 for transparent background?
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,  //set it to 0 for transparent background?

            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "1", //size of dots
              strokeWidth: "2",
              stroke: "#ffa726"
            },

          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>


    <View style={styles.container} className="bg-slate-900">
      <Text className="text-white text-[20px] pl-8 mb-6">Suggestions</Text>
      <View style={styles.cards}>
        <Surface
          elevation={1}
          category="medium"
          style={{ width: 110, height: 200,
            alignItems: 'center', gap: 20, backgroundColor: "#BD91C3"}}
        >
          <View style={{marginTop: 10, alignItems: 'center', gap: 10}} className="px-3">
            <MaterialIcons name="local-laundry-service" size={60} color="#180347" />
            <Text>A great time for laundry.</Text>
            <Button title="2:00"/>
          </View>
        </Surface>

        <Surface
          elevation={2}
          category="medium"
          style={{ width: 110, height: 200,
            alignItems: 'center', gap: 20, backgroundColor: "#BD91C3"}}
        >
          <View style={{marginTop: 10, alignItems: 'center', gap: 10}} className="px-3">
            <FontAwesome5 name="fan" size={60} color="#180347" />
            <Text>Turn on that A/C!</Text>
            <Button title="2:00"/>
          </View>
        </Surface>

        <Surface
          elevation={2}
          category="medium"
          style={{ width: 110, height: 200,
            alignItems: 'center', gap: 20, backgroundColor: "#BD91C3"}}
        >
          <View style={{marginTop: 10, alignItems: 'center', justifyContent: 'center', gap: 10}} className="px-3">
            <MaterialIcons name="lightbulb" size={60} color="#180347" />
            <Text>It's a little dark. Turn on the lights!</Text>
            <Button title="2:00"/>
          </View>
        </Surface>
      </View>
    </View>

  </>
  )
}

export default StatsScreen;
