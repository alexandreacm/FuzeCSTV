import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../../styles/theme';

type Props = {
  children: React.ReactNode;
};

const CustomTitle = ({children}: Props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 40,
    top: 44,
  },
  title: {
    width: 130,
    height: 40,
    fontSize: 32,
    textAlign: 'left',
    fontWeight: '500',
    fontFamily: theme.fonts.title,
    color: theme.colors.text.white,
  },
});

export default CustomTitle;
