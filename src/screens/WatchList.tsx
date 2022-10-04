import React from 'react';
import {Box, ScrollView} from 'native-base';
import TopBar from '../components/common/TopBar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MovieWatchlist from '../components/watchlist/MovieWatchlist';
import TVWatchlist from '../components/watchlist/TVWatchlist';
const Tab = createMaterialTopTabNavigator();

const WatchList = () => {
  return (
    <Box safeArea backgroundColor="white">
      <TopBar
        title="Watch List"
        description="Your movies or tv shows on watch list are displayed here"
      />
      <Box mx="5" h="full" backgroundColor="white">
        <ScrollView _contentContainerStyle={{flexGrow: 1}}>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 14,
                color: 'black',
                fontWeight: 'bold',
              },
            }}>
            <Tab.Screen
              name="Movies Watchlist"
              children={() => <MovieWatchlist />}
            />
            <Tab.Screen name="TV Watchlist" children={() => <TVWatchlist />} />
          </Tab.Navigator>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default WatchList;
