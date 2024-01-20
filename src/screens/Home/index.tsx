import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import {theme} from '../../styles/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTitle from '../../components/CustomTitle';
import {useGetLeaguesQuery} from '../../service/matchesApi';
import CardMatch from '../../components/CardMatch';
import {Match} from '../../models';
import Loading from '../../components/Loading';

const Home = () => {
  const {data = [], isLoading, isError, error} = useGetLeaguesQuery();

  React.useEffect(() => {}, []);

  const renderItem = ({item}: {item: Match}) => {
    return <CardMatch match={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomTitle>Partidas</CustomTitle>

      {isLoading && <Loading />}
      {isError && <Text style={styles.title}>{JSON.stringify(error)}</Text>}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data as Match[]}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
    padding: 23,
  },
  title: {
    color: theme.colors.text.white,
  },
});

//make this component available to the app
export default Home;
