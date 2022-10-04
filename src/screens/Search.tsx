import React, {useState} from 'react';
import {Box, Input, ScrollView, SearchIcon} from 'native-base';
import TopBar from '../components/common/TopBar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import SearchMovies from '../components/search/SearchMovies';
import SearchTVShows from '../components/search/SearchTVShows';

const Search = () => {
  const [query, setQuery] = useState<string>('batman');

  const handleSearch = (text: string) => setQuery(text);

  return (
    <Box safeArea backgroundColor="white" minH="100%">
      <TopBar
        title="Search"
        description="Search your movies or tv shows here"
      />
      <Box mx="5">
        <Input
          variant="rounded"
          placeholder="Search movies or tv shows"
          fontSize="md"
          py="3"
          pl="5"
          fontWeight="bold"
          my="3"
          value={query}
          onChangeText={handleSearch}
          InputRightElement={<SearchIcon size={6} pr="10" />}
        />
      </Box>
      <Box h="full">
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
              name="Movies Results"
              children={() => <SearchMovies query={query} />}
            />
            <Tab.Screen
              name="TV Shows Results"
              children={() => <SearchTVShows query={query} />}
            />
          </Tab.Navigator>
        </ScrollView>
      </Box>
      {/* {renderSearch()} */}
    </Box>
  );
};

export default Search;
