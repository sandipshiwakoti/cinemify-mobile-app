import {
  Avatar,
  Box,
  Center,
  HStack,
  ScrollView,
  Spinner,
  Text,
} from 'native-base';
import React from 'react';
import {getImageUrl} from '../../config/utils';
import {useTVCreditsById} from '../../hooks/useTVShows';

const Cast = ({id}) => {
  const {data: credits, isLoading, isError} = useTVCreditsById(id);

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

  if (credits?.cast?.length) {
    return (
      <Box p="5">
        <ScrollView _contentContainerStyle={{flexGrow: 1, minHeight: 1000}}>
          <HStack flexGrow="1" justifyContent="space-between" flexWrap="wrap">
            {credits.cast.slice(0, 5).map((cast: any, index: number) => {
              const {profile_path, name} = cast;
              return (
                <Box mb="5" key={index}>
                  <Avatar
                    key={index}
                    bg="green.500"
                    source={{
                      uri: getImageUrl(profile_path),
                    }}
                    boxSize="120">
                    {name
                      .split(' ')
                      .map((n: string) => n[0])
                      .join('')}
                  </Avatar>
                  <Text fontWeight="bold" fontSize="md" textAlign="center">
                    {name}
                  </Text>
                </Box>
              );
            })}
          </HStack>
        </ScrollView>
      </Box>
    );
  }
  return (
    <Center my="10">
      <Text fontWeight="semibold" fontSize="xl">
        No casts found
      </Text>
    </Center>
  );
};

export default Cast;
