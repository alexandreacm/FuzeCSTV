//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {theme} from '../../styles/theme';
import {League} from '../../models';
import icLogo from '../../assets/images/icLogo.png';

type Props = {
  league: League;
};

const Card = ({league}: Props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.teamContainer}>
        <View style={styles.containerImg}>
          <Image source={icLogo} style={styles.img} />
          <Text style={styles.titleLeague}>Time 1</Text>
        </View>

        <Text style={styles.middleTitle}>VS</Text>
        <View style={styles.containerImg}>
          <Image source={icLogo} style={styles.img} />
          <Text style={styles.titleLeague}>Time 2</Text>
        </View>
      </View>
      <View style={styles.leagueContainerBottom}>
        <Image source={icLogo} style={styles.imgBottom} />
        <Text style={styles.leagueTitle}>League + serie</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 180,
    backgroundColor: theme.colors.ui.card,
    borderRadius: 16,
    marginBottom: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamContainer: {
    width: '100%',
    height: 135,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C4C4C4',
    borderBottomWidth: 0.2,
  },
  img: {
    width: 75,
    height: 75,
  },
  middleTitle: {
    width: 14,
    height: 14,
    fontFamily: theme.fonts.heading,
    fontSize: 12,
    fontWeight: '400',
    margin: 20,
    textAlign: 'center',
    color: '#C4C4C4',
  },
  imgBottom: {
    width: 20,
    height: 20,
  },
  leagueContainerBottom: {
    width: 313,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leagueTitle: {
    width: '100%',
    fontFamily: theme.fonts.heading,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'left',
    color: '#FFF',
    marginLeft: 8,
  },
  containerImg: {
    width: 82,
    height: 82,
    alignItems: 'center',
  },
  titleLeague: {
    width: '100%',
    fontFamily: theme.fonts.heading,
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FFF',
    lineHeight: 11.72,
    marginTop: 10,
  },
});

export default Card;
