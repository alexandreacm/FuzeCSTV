//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../../styles/theme';

type Props = {
  beginDate: string;
};
const CardMatchTime = ({beginDate}: Props) => {
  return (
    <View style={styles.matchTime}>
      <Text style={styles.matchTimeText}>{beginDate}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  matchTime: {
    width: 43,
    height: 25,
    backgroundColor: '#FF0000',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderStartEndRadius: 16,
    borderEndStartRadius: 16,
    top: -200,
    left: 305,
    zIndex: 1,
    position: 'absolute',
  },
  matchTimeText: {
    width: 42,
    height: 9,
    fontFamily: theme.fonts.heading,
    fontSize: 8,
    fontWeight: '700',
    textAlign: 'center',
    color: '#FFF',
    lineHeight: 9.38,
  },
});

export default CardMatchTime;
