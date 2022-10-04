import {Box, HStack, ScrollView, Text} from 'native-base';
import React from 'react';
import {getFormattedTime} from '../../config/utils';

const About = ({
  overview,
  release_date,
  vote_average,
  vote_count,
  status,
  tagline,
  runtime,
}) => {
  return (
    <ScrollView _contentContainerStyle={{flexGrow: 1, minHeight: 1000}}>
      <Box p="5">
        <Box mb="2">
          <Text fontSize="lg" fontWeight="bold">
            Overview:
          </Text>
          <Text>{overview}</Text>
        </Box>
        <HStack space="7">
          <Box>
            <Box mb="2">
              <Text fontSize="lg" fontWeight="bold">
                Release Date:
              </Text>
              <Text>{release_date}</Text>
            </Box>
            <Box mb="2">
              <Text fontSize="lg" fontWeight="bold">
                Average rating:
              </Text>
              <Text>{vote_average}</Text>
            </Box>
            <Box mb="2">
              <Text fontSize="lg" fontWeight="bold">
                Vote Count:
              </Text>
              <Text>{vote_count}</Text>
            </Box>
          </Box>
          <Box>
            <Box mb="2">
              <Text fontSize="lg" fontWeight="bold">
                Status:
              </Text>
              <Text>Released</Text>
            </Box>
            <Box mb="2">
              <Text fontSize="lg" fontWeight="bold">
                Tagline:
              </Text>
              <Text>{tagline}</Text>
            </Box>
            <Box mb="2">
              <Text fontSize="lg" fontWeight="bold">
                Duration:
              </Text>
              <Text>{getFormattedTime(runtime)}</Text>
            </Box>
          </Box>
        </HStack>
      </Box>
    </ScrollView>
  );
};

export default About;
