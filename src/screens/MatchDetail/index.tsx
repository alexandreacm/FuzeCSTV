import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import {theme} from '../../styles/theme';
import {useGetTeamsByAcronymQuery} from '../../service/matchesApi';
import Loading from '../../components/Loading';
import {Teams, statusMatch} from '../../models';
import {format} from 'date-fns';
import localePtBr from 'date-fns/locale/pt-BR';
import {formatOption, timeOption} from '../../util';

type Props = {
  route: {
    params: {
      title: string;
      status: string;
      scheduledAt: string;
      teamIds: number[];
      teamImages: string[];
      teamNames: string[];
    };
  };
};
// create a component
const MatchDetail = ({route}: Props) => {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useGetTeamsByAcronymQuery(route.params.teamIds);

  const {status, scheduledAt, teamImages, teamNames} = route.params;

  const renderItem = ({item}: {item: Teams}) => {
    return (
      <View style={styles.flatListContainer}>
        {item.players.map(item => {
          return (
            <View key={`${item.id}`} style={styles.cardNamePlayer}>
              <View style={styles.frameNamePicture}>
                <View style={styles.frameNickname}>
                  <Text
                    style={
                      styles.nickname
                    }>{`${item?.first_name} ${item?.last_name}`}</Text>
                  <Text style={styles.playerName}>{item?.name}</Text>
                </View>
                {item?.image_url !== null ? (
                  <Image
                    source={{uri: item.image_url}}
                    style={styles.picture}
                  />
                ) : (
                  <View style={styles.DefaultPicture} />
                )}
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {isError && <Text style={styles.error}>{JSON.stringify(error)}</Text>}
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

      <View style={styles.containerTime}>
        <Text style={styles.time}>
          {status === statusMatch.running
            ? `Hoje, ${format(scheduledAt, timeOption, {locale: localePtBr})}`
            : format(scheduledAt, formatOption, {locale: localePtBr})}
        </Text>
      </View>

      <FlatList
        numColumns={2}
        keyExtractor={item => String(item.id)}
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
    alignItems: 'center',
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
    marginBottom: 12,
  },
  cardNamePlayer: {
    width: 174,
    height: 58,
    borderRadius: 12,
    backgroundColor: '#272639',
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContainer: {
    margin: 8,
  },
  frameNamePicture: {
    width: 154,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  frameNickname: {
    width: 90,
    height: 31,
  },
  nickname: {
    fontFamily: theme.fonts.titleBold,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'right',
    color: theme.colors.text.white,
  },
  playerName: {
    lineHeight: 15,
    fontFamily: theme.fonts.heading,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'right',
    color: theme.colors.text.playerName,
  },
  picture: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  DefaultPicture: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.ui.secondary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    backgroundColor: theme.colors.ui.error,
    padding: 10,
    color: theme.colors.text.white,
  },
  containerTime: {
    marginVertical: 20,
  },
});
export default MatchDetail;
