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
import {getAvatarUrl} from '../../config/utils';
import {useTVReviewsById} from '../../hooks/useTVShows';

interface ReviewsProps {
  id: string;
}

const Reviews: React.FC<ReviewsProps> = ({id}) => {
  const {data: reviews, isLoading, isError} = useTVReviewsById(id);

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

  if (reviews?.results?.length) {
    return (
      <ScrollView _contentContainerStyle={{flexGrow: 1}}>
        {reviews.results.map((review: any) => {
          const {author_details, content, author} = review;
          return (
            <HStack p="5" space="4" key={review.id}>
              <Box>
                <Avatar
                  bg="green.500"
                  source={{
                    uri: getAvatarUrl(author_details.avatar_path),
                  }}
                />
              </Box>
              <Box flex="1" flexGrow="1">
                <Text fontSize="lg" fontWeight="bold">
                  {author}
                </Text>
                <Text>{content}</Text>
              </Box>
            </HStack>
          );
        })}
      </ScrollView>
    );
  }
  return (
    <Center my="10">
      <Text fontWeight="semibold" fontSize="xl">
        No reviews found
      </Text>
    </Center>
  );
};

export default Reviews;
