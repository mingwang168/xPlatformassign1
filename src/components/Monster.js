// 1
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

// 2
const Monster = (props) => {
    return (
        <View>
          <Image source={props.imageSrc} style={styles.image} />
        </View>
     );
  }
  
  // 3
  const styles = StyleSheet.create({
    image: {
      width: 400,
      height: 180
    }
  });

// 4
export default Monster;