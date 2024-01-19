import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {theme} from '../../styles/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTitle from '../../components/CustomTitle';
import {useGetLeaguesQuery} from '../../service/leaguesApi';
import Card from '../../components/Card';
import {League} from '../../models';

const Home = () => {
  const {data = [], isLoading, isError, error} = useGetLeaguesQuery();

  React.useEffect(() => {}, []);

  const renderItem = ({item}: {item: League}) => {
    return <Card league={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomTitle>Partidas</CustomTitle>

      {isLoading && <Text style={styles.title}>isLoading</Text>}
      {isError && <Text style={styles.title}>{JSON.stringify(error)}</Text>}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data as League[]}
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
    color: '#FFF',
  },
});

//make this component available to the app
export default Home;
