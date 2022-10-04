import {Center, Spinner, Text} from 'native-base';
import React from 'react';
import {usePopularTVShows} from '../../hooks/useTVShows';
import TVSlider from '../common/TVSlider';

const PopularTVShowsSlider = () => {
  const {data, isLoading, isError} = usePopularTVShows();

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
    return <TVSlider title="Popular TV Shows" data={data.results} />;
  }

  return <></>;
};

export default PopularTVShowsSlider;
