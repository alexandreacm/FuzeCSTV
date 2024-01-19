import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {theme} from '../../styles/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTitle from '../../components/CustomTitle';
import {useGetLeaguesQuery} from '../../service/leaguesApi';

const Home = () => {
  const {data, isLoading, isError, error} = useGetLeaguesQuery();

  React.useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <CustomTitle>Partidas</CustomTitle>

      <View style={{marginVertical: 60}}>
        {isLoading && <Text style={styles.title}>isLoading</Text>}
        {isError && <Text style={styles.title}>{JSON.stringify(error)}</Text>}

        {data && <Text>{JSON.stringify(data)}</Text>}
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
    padding: 24,
  },
  title: {
    color: '#FFF',
  },
});

//make this component available to the app
export default Home;
