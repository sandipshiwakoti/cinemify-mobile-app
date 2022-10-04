import {Box, ScrollView} from 'native-base';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PopularMovies from '../components/Movies/PopularMovies';
import TopRatedMovies from '../components/Movies/TopRatedMovies';
import TopBar from '../components/common/TopBar';
const Tab = createMaterialTopTabNavigator();

const Movies = () => {
  return (
    <Box safeArea backgroundColor="white">
      <TopBar
        title="Movies"
        description="Explore popular and top rated movies here"
      />
      <Box h="full">
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 14,
              color: 'black',
              fontWeight: 'bold',
            },
          }}>
          <Tab.Screen name="Popular Movies" component={PopularMovies} />
          <Tab.Screen name="Top Rated Movies" component={TopRatedMovies} />
        </Tab.Navigator>
      </Box>
    </Box>
  );
};

export default Movies;
