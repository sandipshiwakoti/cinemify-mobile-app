import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Spacer,
  Spinner,
  Text,
} from 'native-base';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PosterCard from '../components/common/PosterCard';
import TopBar from '../components/common/TopBar';
import About from '../components/Detail/About';
import Reviews from '../components/Detail/MovieReviews';
import Cast from '../components/Detail/MovieCast';
import {useRoute} from '@react-navigation/native';
import {useMovieById} from '../hooks/useMovies';
import {getFormattedRating, getImageUrl} from '../config/utils';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';

const Tab = createMaterialTopTabNavigator();

const MovieDetail = () => {
  const route = useRoute();
  const id: string = route?.params?.id;
  const {data: movie, isLoading, isError} = useMovieById(id);

  const {movieWatchlist} = useSelector(state => state.watchlistReducer);

  const isAlreadyInWatchlist = () => {
    return movieWatchlist.find(movie => movie.id === id);
  };

  const dispatch = useDispatch();

  const toggleWatchlist = () =>
    isAlreadyInWatchlist()
      ? dispatch({type: 'REMOVE_MOVIE', payload: {id}})
      : dispatch({type: 'ADD_MOVIE', payload: movie});

  const renderRightElement = () => {
    return (
      <Icon
        as={MaterialCommunityIcons}
        name={isAlreadyInWatchlist() ? 'bookmark-check' : 'bookmark'}
        size={33}
        onPress={toggleWatchlist}
      />
    );
  };

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

  if (movie) {
    const {title, backdrop_path, vote_average, genres} = movie;

    return (
      <Box safeArea>
        <TopBar
          title="Detail"
          description="Search your movies or tv shows here"
          renderRightElement={renderRightElement}
        />
        <Box h="full" backgroundColor="white">
          <Box bg="gray.700" w="full">
            <FastImage
              style={{
                width: '100%',
                height: 170,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                opacity: 0.5,
              }}
              source={{
                uri: getImageUrl(backdrop_path),
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </Box>
          <Box px="5">
            <HStack space="4" alignItems="center">
              <PosterCard
                width="130"
                height="180"
                marginTop="-50%"
                {...movie}
              />
              <Heading py="2" maxW="150">
                {title}
              </Heading>
            </HStack>
            <HStack alignItems="center" space="5" my="2">
              <Box>
                <Icon as={MaterialCommunityIcons} name="star" size={36} />
                <Text textAlign="center" fontSize="lg" fontWeight="bold">
                  {getFormattedRating(vote_average)}
                </Text>
              </Box>

              <HStack flexGrow="1" space="3" flexWrap="wrap" w="100">
                {genres.slice(0, 3).map((genre: any) => {
                  return (
                    <Center
                      key={genre.id}
                      alignSelf="center"
                      bg="cyan.800"
                      borderRadius="xl"
                      px="4"
                      py="1">
                      <Text fontSize="md" color="white">
                        {genre.name}
                      </Text>
                    </Center>
                  );
                })}
              </HStack>
            </HStack>
          </Box>
          <Box h="full">
            <Tab.Navigator
              screenOptions={{
                tabBarLabelStyle: {
                  fontSize: 14,
                  color: 'black',
                  fontWeight: 'bold',
                },
                lazy: true,
              }}>
              <Tab.Screen name="About" children={() => <About {...movie} />} />
              <Tab.Screen name="Reviews" children={() => <Reviews id={id} />} />
              <Tab.Screen name="Cast" children={() => <Cast id={id} />} />
            </Tab.Navigator>
          </Box>
        </Box>
      </Box>
    );
  }

  return <></>;
};

export default MovieDetail;
