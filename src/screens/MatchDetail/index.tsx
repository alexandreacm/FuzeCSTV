import React from 'react';
import {View, Text, SafeAreaView, Image, FlatList} from 'react-native';
import {useGetTeamsByAcronymQuery} from '../../service/matchesApi';
import Loading from '../../components/Loading';
import {Teams, statusMatch} from '../../models';
import {format} from 'date-fns';
import localePtBr from 'date-fns/locale/pt-BR';
import {formatOption, timeOption} from '../../util';
import styles from './styles';

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
                    numberOfLines={1}
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

export default MatchDetail;
