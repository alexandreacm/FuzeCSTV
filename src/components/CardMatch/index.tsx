import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Match} from '../../models';
import CardMatchTime from '../CardMatchTime';

import icLogo from '../../assets/images/icLogo.png';
import styles from './styles';

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

export default CardMatch;
