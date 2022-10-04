import {Box, FlatList, ScrollView, Spacer, Text} from 'native-base';
import React from 'react';
import {useSelector} from 'react-redux';
import TVCardItem from '../common/TVCardItem';

const TVWatchlist = () => {
  const {tvWatchlist} = useSelector(state => state.watchlistReducer);

  const renderItem = ({item}) => {
    return <TVCardItem {...item} key={item.id} />;
  };

  if (tvWatchlist.length) {
    return (
      <Box pt="5" backgroundColor="white">
        <ScrollView _contentContainerStyle={{flexGrow: 1}}>
          <Box>
            <FlatList
              data={tvWatchlist}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <Spacer h="150" />
          </Box>
        </ScrollView>
      </Box>
    );
  }

  return <Text>Empty tv watchlist</Text>;
};

export default TVWatchlist;
