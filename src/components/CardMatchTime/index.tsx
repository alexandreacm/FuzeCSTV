//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {format} from 'date-fns';
import localePtBr from 'date-fns/locale/pt-BR';

import {theme} from '../../styles/theme';
import {statusMatch} from '../../models';
import {formatOption} from '../../util';

type Props = {
  scheduledAt: string;
  status: string;
};

const CardMatchTime = ({scheduledAt, status}: Props) => {
  return (
    <View
      style={[
        styles.matchTime,
        {
          backgroundColor:
            status === statusMatch.running
              ? theme.colors.status.running
              : theme.colors.status.finished,
        },
      ]}>
      <Text style={styles.matchTimeText}>
        {status === statusMatch.running
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
  },
  matchTimeText: {
    fontFamily: theme.fonts.titleBold,
    fontSize: 12,
    textAlign: 'center',
    color: theme.colors.text.white,
  },
});

export default CardMatchTime;
