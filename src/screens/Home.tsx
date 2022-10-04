import React from 'react';
import {Box, Heading, ScrollView, Text} from 'native-base';
import SearchBar from '../components/common/SearchBar';
import FeaturedSlider from '../components/home/FeaturedSlider';
import PopularMoviesSlider from '../components/home/PopularMoviesSlider';
import TrendingMoviesSlider from '../components/home/TrendingMoviesSlider';
import PopularTVShowsSlider from '../components/home/PopularTVShowsSlider';
import TrendingTVShowsSlider from '../components/home/TrendingTVShowsSlider';

const Home = () => {
  return (
    <Box safeArea px="5" backgroundColor="white">
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text
          my="5"
          fontSize="3xl"
          fontWeight="extrabold"
          color="yellow.600"
          textAlign="center">
          Cinemify
        </Text>
        <Box>
          <FeaturedSlider />
          <PopularMoviesSlider />
          <PopularTVShowsSlider />
          <TrendingMoviesSlider />
          <TrendingTVShowsSlider />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Home;
