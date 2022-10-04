import {Center, Spinner, Text} from 'native-base';
import React from 'react';
import {useTrendingTVShows} from '../../hooks/useTVShows';
import TVSlider from '../common/TVSlider';

const TrendingTVShowsSlider = () => {
  const {data, isLoading, isError} = useTrendingTVShows();

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
    return <TVSlider title="Trending TV Shows" data={data.results} />;
  }

  return <></>;
};

export default TrendingTVShowsSlider;
