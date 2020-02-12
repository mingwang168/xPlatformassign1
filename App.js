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
  const [name, setName] = useState('X');
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

            //  console.log(randomHead)
           //   console.log(headOf)
              if(randomHead==heads[0] && randomBody==bodys[0] && randomFeet==feet[0]){setName("Bill");}else
              if(randomHead==heads[1] && randomBody==bodys[1] && randomFeet==feet[1]){setName("Dave");}else
              if(randomHead==heads[2] && randomBody==bodys[2] && randomFeet==feet[2]){setName("Greta");}else
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
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 10,
    color: 'red'
  }
});