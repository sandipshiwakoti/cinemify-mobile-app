import {AVATAR_URL, IMAGE_URL, NO_AVATAR_URL} from './urls';

export const getImageUrl = (imgKey: string) => {
  return `${IMAGE_URL}/${imgKey}`;
};

export const getFormattedTime = (time: number) => {
  return Math.floor(time / 60) + 'hr ' + (time % 60) + 'min';
};

export const getAvatarUrl = (path: string) => {
  if (!path) {
    return NO_AVATAR_URL;
  }
  return path.includes('https')
    ? path.replace('/https', 'https')
    : `${AVATAR_URL}/${path}`;
};

export const getFormattedRating = (rating: number) => {
  return Math.round(rating * 10) / 10;
};
