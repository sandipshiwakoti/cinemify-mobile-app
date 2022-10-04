import {Center, Spinner, Text} from 'native-base';
import React from 'react';
import {usePopularMovies} from '../../hooks/useMovies';
import Carousel from '../common/MovieSlider';

const PopularMoviesSlider = () => {
  const {data, isLoading, isError} = usePopularMovies();

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
    return <Carousel title="Popular Movies" data={data.results} />;
  }

  return <></>;
};

export default PopularMoviesSlider;
