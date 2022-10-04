import {useNavigation} from '@react-navigation/native';
import {Image} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {getImageUrl} from '../../config/utils';

interface PosterCardProps {
  id: number;
  title: string;
  poster_path: string;
  handlePress: () => void;
  width: string;
  height: string;
}

const PosterCard: React.FC<PosterCardProps> = ({
  id,
  title,
  poster_path,
  handlePress,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={{
          uri: getImageUrl(poster_path),
        }}
        alt={title || 'Poster'}
        size="xl"
        borderRadius={10}
        fallbackSource={{
          uri: 'https://www.w3schools.com/css/img_lights.jpg',
        }}
        {...props}
      />
    </TouchableOpacity>
  );
};

export default PosterCard;
