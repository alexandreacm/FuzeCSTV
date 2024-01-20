//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {format} from 'date-fns';
import localePtBr from 'date-fns/locale/pt-BR';

import {theme} from '../../styles/theme';

type Props = {
  scheduledAt: string;
  status: string;
};

const CardMatchTime = ({scheduledAt, status}: Props) => {
  const formatOption = "dd'.'MM H':'mm";
  return (
    <View
      style={[
        styles.matchTime,
        {
          backgroundColor:
            status === 'running'
              ? theme.colors.status.running
              : theme.colors.status.finished,
        },
      ]}>
      <Text style={styles.matchTimeText}>
        {status === 'running'
          ? 'AGORA'
          : format(scheduledAt, formatOption, {locale: localePtBr})}
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  matchTime: {
    width: 85,
    backgroundColor: theme.colors.status.finished,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderStartEndRadius: 16,
    borderEndStartRadius: 16,
    position: 'absolute',
    zIndex: 1,
    top: -220,
    left: 260,
  },
  matchTimeText: {
    fontFamily: theme.fonts.titleBold,
    fontSize: 12,
    textAlign: 'center',
    color: theme.colors.text.white,
  },
});

export default CardMatchTime;
