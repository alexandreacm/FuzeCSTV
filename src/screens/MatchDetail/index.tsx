import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {theme} from '../../styles/theme';
import {useGetTeamsByAcronymQuery} from '../../service/matchesApi';
import Loading from '../../components/Loading';
import {statusMatch} from '../../models';
import {format} from 'date-fns';
import localePtBr from 'date-fns/locale/pt-BR';
import {formatOption, timeOption} from '../../util';

type Props = {
  route: {
    params: {
      title: string;
      status: string;
      scheduledAt: string;
      acronym: string;
      teamImages: string[];
      teamNames: string[];
    };
  };
};
// create a component
const MatchDetail = ({route}: Props) => {
  const {data, isLoading, isError, error} = useGetTeamsByAcronymQuery(
    route.params.acronym,
  );

  const {status, scheduledAt, teamImages, teamNames} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <Loading />}
      {isError && <Text style={styles.title}>{JSON.stringify(error)}</Text>}

      <View style={styles.teamContainer}>
        <View style={styles.containerImg}>
          {teamImages[0] !== null ? (
            <View style={styles.containerLogoTeam}>
              <Image
                source={{uri: teamImages[0]}}
                style={styles.img}
                resizeMode="contain"
              />
            </View>
          ) : (
            <View style={styles.DefaultTeamLogo} />
          )}

          <Text style={styles.titleLeague}>{teamNames[0]}</Text>
        </View>

        <Text style={styles.middleTitle}>VS</Text>

        <View style={styles.containerImg}>
          {teamImages[1] !== null ? (
            <View style={styles.containerLogoTeam}>
              <Image
                source={{uri: teamImages[1]}}
                style={styles.img}
                resizeMode="contain"
              />
            </View>
          ) : (
            <View style={styles.DefaultTeamLogo} />
          )}
          <Text style={styles.titleLeague}>{teamNames[1]}</Text>
        </View>
      </View>

      <Text style={styles.time}>
        {status === statusMatch.running
          ? `Hoje, ${format(scheduledAt, timeOption, {locale: localePtBr})}`
          : format(scheduledAt, formatOption, {locale: localePtBr})}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
    padding: 23,
  },
  title: {
    color: theme.colors.text.white,
  },
  teamContainer: {
    width: '100%',
    height: 130,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  time: {
    fontFamily: theme.fonts.titleBold,
    fontSize: 12,
    textAlign: 'center',
    color: theme.colors.text.white,
    lineHeight: 14.06,
  },
});
export default MatchDetail;
