import {Alert, Center, Spinner, Text} from 'native-base';
import React from 'react';
import {useTrendingMovies} from '../../hooks/useMovies';
import Carousel from '../common/MovieSlider';

const FeaturedSlider = () => {
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
    const featuredData = data.results;
    return <Carousel title="Featured" data={featuredData} />;
  }

  return <></>;
};

export default FeaturedSlider;
