import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../styles/theme';
import {Match} from '../../models';
import CardMatchTime from '../CardMatchTime';

import icLogo from '../../assets/images/icLogo.png';

type Props = {
  match: Match;
};

const CardMatch = ({match}: Props) => {
  const {navigate} = useNavigation();
  if (!match?.opponents.length) {
    return null;
  }

  const leagueSerie = `${match?.league?.name} ${match?.serie?.full_name}`;
  const Ids = `${match?.opponents[0]?.opponent.id},${match?.opponents[1]?.opponent.id}`;

  const isImgTeamOne = match.opponents[0]?.opponent?.image_url !== null;
  const imgTeamOne = match.opponents[0]?.opponent?.image_url;

  const isImgTeamTwo = match.opponents[1]?.opponent?.image_url !== null;
  const imgTeamTwo = match.opponents[1]?.opponent?.image_url;

  const nameTeamOne = match.opponents[0]?.opponent?.name;
  const nameTeamTwo = match.opponents[1]?.opponent?.name;

  const teamImages = [imgTeamOne, imgTeamTwo];
  const teamNames = [nameTeamOne, nameTeamTwo];

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        navigate('MatchDetail', {
          title: leagueSerie,
          teamIds: Ids,
          teamImages: teamImages,
          teamNames: teamNames,
          scheduledAt: match?.scheduled_at,
          status: match?.status,
        })
      }>
      <View style={styles.containerCardMatch}>
        <CardMatchTime
          scheduledAt={match?.scheduled_at}
          status={match?.status}
        />
      </View>

      <View style={styles.teamContainer}>
        <View style={styles.containerImg}>
          {isImgTeamOne ? (
            <View style={styles.containerLogoTeam}>
              <Image
                source={{uri: imgTeamOne}}
                style={styles.img}
                resizeMode="contain"
              />
            </View>
          ) : (
            <View style={styles.DefaultTeamLogo} />
          )}

          <Text style={styles.titleLeague}>{nameTeamOne}</Text>
        </View>

        <Text style={styles.middleTitle}>VS</Text>

        <View style={styles.containerImg}>
          {isImgTeamTwo ? (
            <View style={styles.containerLogoTeam}>
              <Image
                source={
                  isImgTeamTwo ? (
                    {uri: imgTeamTwo}
                  ) : (
                    <View style={styles.DefaultTeamLogo} />
                  )
                }
                style={styles.img}
                resizeMode="contain"
              />
            </View>
          ) : (
            <View style={styles.DefaultTeamLogo} />
          )}
          <Text style={styles.titleLeague}>{nameTeamTwo}</Text>
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
        <Text numberOfLines={1} style={styles.leagueTitle}>
          {leagueSerie}
        </Text>
      </View>
    </TouchableOpacity>
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
    borderColor: theme.colors.ui.secondary,
    borderBottomWidth: 0.2,
  },
  img: {
    width: 60,
    height: 60,
  },
  middleTitle: {
    width: 14,
    height: 14,
    fontFamily: theme.fonts.heading,
    fontSize: 12,
    fontWeight: '400',
    margin: 20,
    textAlign: 'center',
    color: theme.colors.ui.secondary,
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
    width: 260,
    fontFamily: theme.fonts.heading,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'left',
    color: theme.colors.text.white,
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
    color: theme.colors.text.white,
    paddingTop: 5,
  },
  containerCardMatch: {
    width: '100%',
    alignItems: 'flex-end',
  },
  containerLogoTeam: {
    width: 80,
    height: 80,
    backgroundColor: theme.colors.text.white,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DefaultTeamLogo: {
    width: 80,
    height: 80,
    backgroundColor: theme.colors.ui.secondary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardMatch;
