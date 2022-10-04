import {
  Box,
  Center,
  Heading,
  HStack,
  Icon,
  Image,
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
import {getFormattedRating, getImageUrl} from '../config/utils';
import {useTVById} from '../hooks/useTVShows';
import TVReviews from '../components/Detail/TVReviews';
import TVCast from '../components/Detail/TVCast';
import {useDispatch, useSelector} from 'react-redux';

const Tab = createMaterialTopTabNavigator();

const TVDetail = () => {
  const route = useRoute();
  const id: string = route?.params?.id;

  const {data: tv, isLoading, isError} = useTVById(id);
  const {tvWatchlist} = useSelector(state => state.watchlistReducer);

  const isAlreadyInWatchlist = () => {
    return tvWatchlist.find(tv => tv.id === id);
  };

  const dispatch = useDispatch();

  const toggleWatchlist = () =>
    isAlreadyInWatchlist()
      ? dispatch({type: 'REMOVE_TV', payload: {id}})
      : dispatch({type: 'ADD_TV', payload: tv});

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

  if (tv) {
    const {name: title, poster_path, backdrop_path, vote_average, genres} = tv;

    return (
      <Box safeArea>
        <TopBar
          title="Detail"
          description="Search your movies or tv shows here"
          renderRightElement={renderRightElement}
        />
        <Box h="full" backgroundColor="white">
          <Box bg="gray.700">
            <Image
              source={{
                uri: getImageUrl(backdrop_path),
              }}
              alt={title}
              size="xl"
              borderBottomRadius={10}
              w="full"
              h="170"
              minH="170"
              opacity="0.5"
            />
          </Box>
          <Box px="5">
            <HStack space="4" alignItems="center">
              <PosterCard
                width="120"
                height="150"
                marginTop="-50%"
                poster_path={poster_path}
                id={id}
                title={title}
              />
              <Heading py="2" maxW="150">
                {title}
              </Heading>
            </HStack>
            <HStack space="5" my="2">
              <Box>
                <Icon as={MaterialCommunityIcons} name="star" size={36} />
                <Text textAlign="center" fontSize="lg" fontWeight="bold">
                  {getFormattedRating(vote_average)}
                </Text>
              </Box>
              {genres.slice(0, 3).map((genre: any) => {
                return (
                  <Center
                    key={genre.id}
                    bg="cyan.800"
                    alignSelf="center"
                    px="4"
                    borderRadius="xl">
                    <Text fontSize="md" color="white">
                      {genre.name}
                    </Text>
                  </Center>
                );
              })}
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
              <Tab.Screen name="About" children={() => <About {...tv} />} />
              <Tab.Screen
                name="Reviews"
                children={() => <TVReviews id={id} />}
              />
              <Tab.Screen name="Cast" children={() => <TVCast id={id} />} />
            </Tab.Navigator>
          </Box>
        </Box>
      </Box>
    );
  }

  return <></>;
};

export default TVDetail;
