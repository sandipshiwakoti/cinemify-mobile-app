import {Box, FlatList, ScrollView, Spacer, Text} from 'native-base';
import React from 'react';
import {useSelector} from 'react-redux';
import MovieCardItem from '../common/MovieCardItem';

const MovieWatchlist = () => {
  const {movieWatchlist} = useSelector(state => state.watchlistReducer);

  const renderItem = ({item}) => {
    return <MovieCardItem {...item} key={item.id} />;
  };

  if (movieWatchlist.length) {
    return (
      <Box pt="5" backgroundColor="white">
        <ScrollView _contentContainerStyle={{flexGrow: 1}}>
          <Box>
            <FlatList
              data={movieWatchlist}
              renderItem={renderItem}
              keyExtractor={(item, index) => Number(index)}
            />
            <Spacer h="150" />
          </Box>
        </ScrollView>
      </Box>
    );
  }

  return <Text>Empty movie watchlist</Text>;
};

export default MovieWatchlist;
