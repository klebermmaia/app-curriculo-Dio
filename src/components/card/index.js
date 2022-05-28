/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
const Card = ({titulo, children}) => {
  return (
    <>
      <View style={styles.card}>
        <View>
          <Text style={styles.cardTitle}>{titulo}</Text>
        </View>
        <View>
          {children}
        </View>
      </View>
    </>
  );
};

export default Card;
