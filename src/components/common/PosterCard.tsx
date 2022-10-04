import {useNavigation} from '@react-navigation/native';
import {Image} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {getImageUrl} from '../../config/utils';
import FastImage from 'react-native-fast-image';

interface PosterCardProps {
  id: number;
  title: string;
  poster_path: string;
  handlePress: () => void;
  width: string;
  height: string;
  marginTop?: string;
}

const PosterCard: React.FC<PosterCardProps> = ({
  width,
  height,
  marginTop,
  poster_path,
  handlePress,
}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <FastImage
        style={{
          width: width ? Number(width) : 150,
          height: height ? Number(height) : 220,
          borderRadius: 15,
          marginTop: marginTop,
        }}
        source={{
          uri: getImageUrl(poster_path),
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </TouchableOpacity>
  );
};

export default PosterCard;
