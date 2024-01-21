import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import {theme} from '../../styles/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTitle from '../../components/CustomTitle';
import {useGetLeaguesQuery} from '../../service/matchesApi';
import CardMatch from '../../components/CardMatch';
import {CustomError, Match} from '../../models';
import Loading from '../../components/Loading';
import {SerializedError} from '@reduxjs/toolkit';

const Home = () => {
  const {data = [], isLoading, isError, error} = useGetLeaguesQuery();

  //just to implement the error.
  const customError: CustomError | SerializedError | undefined = error;

  const renderItem = ({item}: {item: Match}) => {
    return <CardMatch match={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomTitle>Partidas</CustomTitle>

      {isLoading && <Loading />}
      {isError && <Text style={styles.error}>{customError?.data?.error}</Text>}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data as Match[]}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
    padding: 23,
  },
  error: {
    backgroundColor: theme.colors.ui.error,
    padding: 10,
    color: theme.colors.text.white,
  },
});

export default Home;
