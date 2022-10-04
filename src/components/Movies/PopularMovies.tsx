import {
  Box,
  Button,
  Center,
  FlatList,
  ScrollView,
  Spacer,
  Spinner,
  Text,
} from 'native-base';
import React from 'react';
import {
  useInfinitePopularMovies,
  usePopularMovies,
} from '../../hooks/useMovies';
import MovieCardItem from '../common/MovieCardItem';

const PopularMovies = () => {
  // const {data, isLoading, isError} = usePopularMovies();
  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfinitePopularMovies();

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

  if (data) {
    return (
      <Box p="5" backgroundColor="white">
        <ScrollView _contentContainerStyle={{flexGrow: 1}}>
          <Box>
            <FlatList
              data={data.pages.flatMap(page => page.results)}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />

            <Button
              isLoading={isFetchingNextPage}
              isLoadingText="Loading More"
              variant="solid"
              colorScheme="secondary"
              onPress={() => hasNextPage && fetchNextPage()}>
              Load More
            </Button>
            <Spacer h="150" />
          </Box>
        </ScrollView>
      </Box>
    );
  }

  return <></>;
};

export default PopularMovies;
