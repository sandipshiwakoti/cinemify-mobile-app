import {useNavigation} from '@react-navigation/native';
import {Box, HStack, Icon, Text, VStack} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useTVGenres} from '../../hooks/useTVShows';
import PosterCard from './PosterCard';

const TVCardItem: React.FC<any> = data => {
  const {id, title, poster_path} = data;
  const {data: genres} = useTVGenres();
  const navigation = useNavigation();
  const {tvWatchlist} = useSelector(state => state.watchlistReducer);
  const dispatch = useDispatch();

  const isAlreadyInWatchlist = () => {
    return tvWatchlist.find(tv => tv.id === id);
  };

  const toggleWatchlist = () =>
    isAlreadyInWatchlist()
      ? dispatch({type: 'REMOVE_TV', payload: {id}})
      : dispatch({type: 'ADD_TV', payload: data});

  return (
    <HStack space="5" mb="4">
      <PosterCard
        id={id}
        title={title}
        poster_path={poster_path}
        width="120"
        height="180"
        handlePress={() => navigation.navigate('TVDetail', {id})}
      />
      <Box flex="1" flexGrow="1">
        <Text fontWeight="bold" fontSize="md">
          Title:
        </Text>
        <Text fontSize="md">{data.name || 'N/A'}</Text>
        <Text fontWeight="bold" fontSize="md">
          Release Date:
        </Text>
        <Text fontSize="md">{data.first_air_date || 'N/A'}</Text>
        <Text fontWeight="bold" fontSize="md">
          Genre:
        </Text>
        <Text fontSize="md">
          {genres
            ? genres.genres
                .slice(0, 5)
                .map((item: any) => item.name)
                .join(', ')
            : 'N/A'}
        </Text>
      </Box>

      <VStack space="3" justifyContent="space-between">
        <Icon
          as={MaterialCommunityIcons}
          name={isAlreadyInWatchlist() ? 'bookmark-check' : 'bookmark'}
          size={33}
          onPress={toggleWatchlist}
        />
        <Box>
          <Icon as={MaterialCommunityIcons} name="star" size={33} />
          <Text textAlign="center" fontSize="md" fontWeight="bold">
            {data.vote_average}
          </Text>
        </Box>
      </VStack>
    </HStack>
  );
};

export default TVCardItem;
