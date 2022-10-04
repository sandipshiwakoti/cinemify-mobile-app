import {useNavigation} from '@react-navigation/native';
import {Box, HStack, Icon, Text, VStack} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useMovieGenres} from '../../hooks/useMovies';
import PosterCard from './PosterCard';

const MovieCardItem: React.FC<any> = data => {
  const {id, title, poster_path} = data;
  const {data: genres} = useMovieGenres();
  const navigation = useNavigation();
  const {movieWatchlist} = useSelector(state => state.watchlistReducer);

  const isAlreadyInWatchlist = () => {
    return movieWatchlist.find(movie => movie.id === id);
  };

  const dispatch = useDispatch();

  const toggleWatchlist = () =>
    isAlreadyInWatchlist()
      ? dispatch({type: 'REMOVE_MOVIE', payload: {id}})
      : dispatch({type: 'ADD_MOVIE', payload: data});

  return (
    <HStack space="5" mb="4">
      <PosterCard
        id={id}
        title={title}
        poster_path={poster_path}
        width="120"
        height="180"
        handlePress={() => navigation.navigate('MovieDetail', {id})}
      />
      <Box flex="1" flexGrow="1">
        <Text fontWeight="bold" fontSize="md">
          Title:
        </Text>
        <Text fontSize="md">{data.title}</Text>
        <Text fontWeight="bold" fontSize="md">
          Release Date:
        </Text>
        <Text fontSize="md">{data.release_date}</Text>
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

export default MovieCardItem;
