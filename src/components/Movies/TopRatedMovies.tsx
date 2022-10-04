import {
  Box,
  Center,
  FlatList,
  ScrollView,
  Spacer,
  Spinner,
  Text,
} from 'native-base';
import React from 'react';
import {useTopRatedMovies} from '../../hooks/useMovies';
import MovieCardItem from '../common/MovieCardItem';

const TopRatedMovies = () => {
  const {data, isLoading, isError} = useTopRatedMovies();

  if (isLoading) {
    return (
      <Center my="10">
        <Spinner size="lg" />
      </Center>
    );
  }

  if (isError) {
    return <Text>Error!!!</Text>;
  }

  const renderItem = ({item}) => {
    return <MovieCardItem {...item} key={item.id} />;
  };

  return (
    <Box p="5" backgroundColor="white">
      <ScrollView _contentContainerStyle={{flexGrow: 1}}>
        <Box>
          <FlatList
            data={data.results}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <Spacer h="150" />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default TopRatedMovies;
