import React from 'react';
import {Box, Center, ScrollView, Spacer, Spinner, Text} from 'native-base';
import {useSearchTVShows} from '../../hooks/useTVShows';
import TVCardItem from '../common/TVCardItem';

const SearchTVShows = ({query}: {query: string}) => {
  const {data, isLoading, isError} = useSearchTVShows(query, 1);

  if (isLoading) {
    return (
      <Center my="10">
        <Spinner size="lg" />
      </Center>
    );
  }

  if (isError) {
    return <Text>Error..</Text>;
  }

  if (data) {
    return (
      <Box mx="5" mb="300">
        <Text fontSize="lg" bold my="3">
          TV Shows found: {data.total_results}
        </Text>
        <ScrollView _contentContainerStyle={{flexGrow: 1}}>
          {data.results.map((item: any) => {
            return <TVCardItem {...item} key={item.id} />;
          })}
          <Spacer h="150" />
        </ScrollView>
      </Box>
    );
  }

  return <>No data found</>;
};

export default SearchTVShows;
