import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {theme} from '../../styles/theme';
import {Match} from '../../models';
import icLogo from '../../assets/images/icLogo.png';
import CardMatchTime from '../CardMatchTime';

type Props = {
  match: Match;
};

const CardMatch = ({match}: Props) => {
  if (!match?.opponents.length) {
    return null;
  }

  return (
    <View style={styles.cardContainer}>
      <CardMatchTime scheduledAt={match?.scheduled_at} status={match?.status} />

      <View style={styles.teamContainer}>
        <View style={styles.containerImg}>
          {match.opponents[0]?.opponent?.image_url !== null ? (
            <Image
              source={{uri: match.opponents[0]?.opponent?.image_url}}
              style={styles.img}
              resizeMode="contain"
            />
          ) : (
            <Image source={icLogo} style={styles.img} />
          )}

          <Text style={styles.titleLeague}>
            {match.opponents[0]?.opponent?.name}
          </Text>
        </View>

        <Text style={styles.middleTitle}>VS</Text>
        <View style={styles.containerImg}>
          {match.opponents[1]?.opponent?.image_url !== null ? (
            <Image
              source={{uri: match.opponents[1]?.opponent?.image_url}}
              style={styles.img}
              resizeMode="contain"
            />
          ) : (
            <Image source={icLogo} style={styles.img} />
          )}
          <Text style={styles.titleLeague}>
            {match.opponents[1]?.opponent?.name}
          </Text>
        </View>
      </View>
      <View style={styles.leagueContainerBottom}>
        {match?.league?.image_url !== null ? (
          <Image
            source={{uri: match?.league?.image_url}}
            style={styles.imgBottom}
          />
        ) : (
          <Image source={icLogo} style={styles.imgBottom} />
        )}
        <Text
          style={
            styles.leagueTitle
          }>{`${match?.league?.name} + ${match?.serie?.full_name}`}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 200,
    backgroundColor: theme.colors.ui.card,
    borderRadius: 16,
    marginBottom: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamContainer: {
    width: '100%',
    height: 130,
    marginBottom: 10,
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
    width: '100%',
    height: 32,
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
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
    width: 90,
    height: 90,
    alignItems: 'center',
    padding: 8,
  },
  titleLeague: {
    width: 120,
    fontFamily: theme.fonts.titleBold,
    fontSize: 10,
    textAlign: 'center',
    color: '#FFF',
    paddingTop: 5,
  },
});

export default CardMatch;
