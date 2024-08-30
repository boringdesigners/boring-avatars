import React from 'react';
import PropTypes from 'prop-types';
import AvatarBauhaus from './avatar-bauhaus';
import AvatarRing from './avatar-ring';
import AvatarPixel from './avatar-pixel';
import AvatarBeam from './avatar-beam';
import AvatarSunset from './avatar-sunset';
import AvatarMarble from './avatar-marble';

const variants = ['pixel', 'bauhaus', 'ring', 'beam', 'sunset', 'marble'];
const deprecatedVariants = { geometric: 'beam', abstract: 'bauhaus' };

const Avatar = ({
  variant = 'marble',
  colors = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
  name = 'Clara Barton',
  square = false,
  title = false,
  size = 40,
  responsive = false,
  ...props
}) => {
  const avatarProps = { colors, name, title, size, square, responsive, ...props };
  const checkedVariant = () => {
    if (Object.keys(deprecatedVariants).includes(variant)) {
      return deprecatedVariants[variant];
    }
    if (variants.includes(variant)) {
      return variant;
    }
    return 'marble';
  };
  const avatars = {
    pixel: <AvatarPixel {...avatarProps} />,
    bauhaus: <AvatarBauhaus {...avatarProps} />,
    ring: <AvatarRing {...avatarProps} />,
    beam: <AvatarBeam {...avatarProps} />,
    sunset: <AvatarSunset {...avatarProps} />,
    marble: <AvatarMarble {...avatarProps} />,
  };
  return avatars[checkedVariant()];
};

Avatar.propTypes = {
  variant: PropTypes.oneOf(variants),
};

export default Avatar;
