import { View, Text, Dimensions, StyleSheet} from 'react-native'
import React from 'react'

import { Surface, Button} from "@react-native-material/core";

import Icon from 'react-native-vector-icons/FontAwesome';


import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

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


const StatsScreen = () => {

  return (
    <>
    <View style={styles.container}>

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
    width={Dimensions.get("window").width} // from react-native
    height={220}
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

  <View style={styles.container}>
  <Text style={{ marginLeft: 5 ,fontSize: 28}}>Suggestions</Text>
  <View style={styles.cards}>
  <Surface
      elevation={2}
      category="medium"
      style={{ width: 110, height: 240,
        alignItems: 'center',   gap: 20}}
    >
      <View style={{marginTop: 30,alignItems: 'center',   gap: 20}} >
       <Icon name="home" size={60} />
       <Text>Optimial Time:</Text>
       <Button title="2:00"/>
       </View>
    </Surface>

    <Surface
      elevation={2}
      category="medium"
      style={{ width: 110, height: 240,
        alignItems: 'center',   gap: 20}}
    >
      <View style={{marginTop: 30,alignItems: 'center',   gap: 20}} >
       <Icon name="home" size={60} />
       <Text>Optimial Time:</Text>
       <Button title="2:00"/>
       </View>
    </Surface>

    <Surface
      elevation={2}
      category="medium"
      style={{ width: 110, height: 240,
        alignItems: 'center',   gap: 20}}
    >
      <View style={{marginTop: 30,alignItems: 'center',   gap: 20}} >
       <Icon name="home" size={60} />
       <Text>Optimial Time:</Text>
       <Button title="2:00"/>
       </View>
    </Surface>
    </View>
  </View>
  </>
  )
}

export default StatsScreen;
