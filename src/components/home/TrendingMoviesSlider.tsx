import {Alert, Center, Spinner, Text} from 'native-base';
import React from 'react';
import {useTrendingMovies} from '../../hooks/useMovies';
import Carousel from '../common/MovieSlider';

const TrendingMoviesSlider = () => {
  const {data, isLoading, isError} = useTrendingMovies();

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

  if (data) {
    return <Carousel title="Trending Movies" data={data.results} />;
  }

  return <></>;
};

export default TrendingMoviesSlider;
