import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
// import { Kraken } from '../assets'


// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const AccountScreen = () => {
  return (
    <View className="h-full bg-slate-900">
        <View className="flex items-center h-full">

          <View className="w-full items-center justify-center bg-violet-950 pt-14">
          {/* icon */}
            <View className=" w-32 h-32 rounded-full my-8 border-2 border-violet-700 pt-12">
              {/* <Image source={require('../assets/kraken.png')} />; */}
          </View>
          <Text className="text-violet-100 text-[20px] font-bold mb-8">Kimiko Harada</Text>
          </View>
          {/* points widget*/}
          <View className="w-80 h-32 rounded-[24px] mt-8 border-2 bg-violet-950 border-violet-700/50 flex-row items-center justify-center">
            <View className="w-16 h-16 rounded-full bg-violet-500 me-4"></View>
            <Text className="text-violet-100 text-[40px] mx-8">10,000</Text>
            <Text className="text-violet-100 ms-4">Points</Text>
          </View>
          {/* button transfer */}
          <TouchableOpacity className="flex w-80 h-16 rounded-full mt-8 border-2 bg-violet-950 border-violet-700 items-center justify-center">
            <Text className="text-violet-100 text-[16px] font-bold">Transfer</Text>
          </TouchableOpacity>
          {/* button credit */}
          <TouchableOpacity className="flex w-80 h-16 rounded-full mt-8 border-2 bg-violet-950 border-violet-700 items-center justify-center">
            <Text className="text-violet-100 text-[16px] font-bold">Credit</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default AccountScreen;
