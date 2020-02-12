import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, Button } from 'react-native';
import Monster from './src/components/Monster';
import Constants from 'expo-constants';
import { setWorldAlignment } from 'expo/build/AR';

export default function App() {
  var heads=new Array();
  heads[0]=require('./assets/monster1_head.png');
  heads[1]=require('./assets/monster2_head.png');
  heads[2]=require('./assets/monster3_head.png');

  var bodys=new Array();
  bodys[0]=require('./assets/monster1_body.png');
  bodys[1]=require('./assets/monster2_body.png');
  bodys[2]=require('./assets/monster3_body.png');

  var feet=new Array();
  feet[0]=require('./assets/monster1_feet.png');
  feet[1]=require('./assets/monster2_feet.png');
  feet[2]=require('./assets/monster3_feet.png');

  const [head, setHead] = useState(heads[Math.floor((Math.random()*heads.length))]);
  const [body, setBody] = useState(bodys[Math.floor((Math.random()*bodys.length))]);
  const [aFeet, setFeet] = useState(feet[Math.floor((Math.random()*feet.length))]);
  const [name, setName] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Monster imageSrc={head} />
        <Monster imageSrc={body} />
        <Monster imageSrc={aFeet} />
        <Text style={styles.text}>{name}</Text>
        <Button
            title="MATCH MONSTERS"
            onPress={() => {
              var randomHead=heads[Math.floor((Math.random()*heads.length))];
              var randomBody=bodys[Math.floor((Math.random()*bodys.length))];
              var randomFeet=feet[Math.floor((Math.random()*feet.length))];
              var headOf=randomHead.toString().substr(14,8);
              var bodyOf=randomBody.toString().substr(14,8);
              var feetOf=randomFeet.toString().substr(14,8);
        //      console.log(randomHead)
        //      console.log(headOf)
              if(headOf==bodyOf && bodyOf==feetOf && feetOf=='monster1'){setName("Bill");}else
              if(headOf==bodyOf && bodyOf==feetOf && feetOf=='monster2'){setName("Dave");}else
              if(headOf==bodyOf && bodyOf==feetOf && feetOf=='monster3'){setName("Greta");}else
              {setName('')}
              setHead( randomHead );
              setBody( randomBody );
              setFeet( randomFeet );
            }}
            />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 0,
    color: 'red'
  }
});