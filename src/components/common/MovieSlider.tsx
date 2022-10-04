import {Box, Heading} from 'native-base';
import React from 'react';
import Carousel from 'react-native-anchor-carousel';
import {Dimensions, StyleSheet} from 'react-native';
import PosterCard from './PosterCard';
import {useNavigation} from '@react-navigation/native';

interface ImageProps {
  id: number;
  title: string;
  poster_path: string;
}

interface CarouselProps {
  title: string;
  data: ImageProps[];
}

const MovieSlider: React.FC<CarouselProps> = ({data, title}) => {
  const carouselRef = React.useRef(null);
  const navigation = useNavigation();

  const renderItem = ({item}: {item: ImageProps}) => {
    const {id, title: movieTitle, poster_path} = item;

    return (
      <PosterCard
        id={id}
        title={movieTitle}
        poster_path={poster_path}
        width="150"
        height="230"
        handlePress={() => navigation.navigate('MovieDetail', {id})}
      />
    );
  };

  return (
    <Box mb="5">
      <Heading mb="2">{title}</Heading>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        style={styles.carousel}
        itemWidth={155}
        containerWidth={Dimensions.get('window').width}
        inActiveScale={1}
        initialIndex={0}
      />
    </Box>
  );
};

export default MovieSlider;

const styles = StyleSheet.create({
  carousel: {
    flexGrow: 0,
    paddingRight: 20,
    width: '100%',
  },
});
