import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Surface, Chip, Avatar} from "@react-native-material/core";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
    gap:12,
    paddingLeft:18,

  },
  cards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20
  },
  text:{
    color:'cyan',
    fontSize: 16,
    fontWeight:'bold',

  }
});

const FriendsScreen = () => {
  return (
    <View style={styles.container} className="bg-slate-900">
      <Text style={{fontSize: 32, fontWeight:'bold', marginBottom:14,  color: 'white'}}>My Friends</Text>
      <Surface
        elevation={2}
        category="medium"
        style={{ width: 320, height: 116, borderRadius: 40, overflow: "hidden", backgroundColor: "rebeccapurple"}}
      >
      <View style={{flexDirection: 'row', gap:40, justifyContent:"space-between" , marginTop: 26, marginLeft:12,marginRight:12}}>
        <View  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
        <Text style={styles.text}>John</Text>
        </View>
        <View style={{flexDirection: 'column', gap:12}} >
        <View style={{flexDirection: 'row', alignItems: 'center', gap:4, }}><Chip label="3000" /><Text style={styles.text}>kwH saved</Text></View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap:4}}><Chip label="1000"  /><Text style={styles.text}>Points saved</Text></View>
        </View>
      </View>
      </Surface>

      <Surface
        elevation={2}
        category="medium"
        style={{ width: 320, height: 116, borderRadius: 40, overflow: "hidden", backgroundColor: "rebeccapurple"}}
      >
      <View style={{flexDirection: 'row', gap:40, justifyContent:"space-between" , marginTop: 26, marginLeft:12,marginRight:12}}>
        <View  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/4.jpg" }} />
        <Text style={styles.text}>Jane</Text>
        </View>
        <View style={{flexDirection: 'column', gap:12}} >
        <View style={{flexDirection: 'row', alignItems: 'center', gap:4, }}><Chip label="4000" /><Text style={styles.text}>kwH saved</Text></View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap:4}}><Chip label="2000"  /><Text style={styles.text}>Points saved</Text></View>
        </View>
      </View>
      </Surface>

      <Surface
        elevation={2}
        category="medium"
        style={{ width: 320, height: 116, borderRadius: 40, overflow: "hidden", backgroundColor: "rebeccapurple"}}
      >
      <View style={{flexDirection: 'row', gap:40, justifyContent:"space-between" , marginTop: 26, marginLeft:12,marginRight:12}}>
        <View  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }} />
        <Text style={styles.text}>Jill</Text>
        </View>
        <View style={{flexDirection: 'column', gap:12}} >
        <View style={{flexDirection: 'row', alignItems: 'center', gap:4, }}><Chip label="6000" /><Text style={styles.text}>kwH saved</Text></View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap:4}}><Chip label="1000"  /><Text style={styles.text}>Points saved</Text></View>
        </View>
      </View>
      </Surface>

      <Surface
        elevation={2}
        category="medium"
        style={{ width: 320, height: 116, borderRadius: 40, overflow: "hidden", backgroundColor: "rebeccapurple"}}
      >
      <View style={{flexDirection: 'row', gap:40, justifyContent:"space-between" , marginTop: 26, marginLeft:12,marginRight:12}}>
        <View  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }} />
        <Text style={styles.text}>Jack</Text>
        </View>
        <View style={{flexDirection: 'column', gap:12}} >
        <View style={{flexDirection: 'row', alignItems: 'center', gap:4, }}><Chip label="4000" /><Text style={styles.text}>kwH saved</Text></View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap:4}}><Chip label="1000"  /><Text style={styles.text}>Points saved</Text></View>
        </View>
      </View>
      </Surface>





    </View>
  );
};

export default FriendsScreen;
