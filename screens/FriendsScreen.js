import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Surface, Button} from "@react-native-material/core";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:16,
    marginTop:60,

  },
  cards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20
  }
});

const FriendsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 32, fontWeight:'bold'}}>My Friends</Text>
      <Surface
        elevation={2}
        category="medium"
        style={{ width: 320, height: 116, alignItems: 'center', borderRadius: 40, overflow: "hidden"}}
      >
        <View >
          <Text>Optimial Time:</Text>
          <Button title="2:00" style={{ borderRadius: 100 }} />
        </View>
        <View >
          <Text>Optimial Time:</Text>
          <Button title="2:00" style={{ borderRadius: 100 }} />
        </View>

      </Surface>
    </View>
  );
};

export default FriendsScreen;
