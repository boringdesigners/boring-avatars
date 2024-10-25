import React from 'react';
import PropTypes from 'prop-types';
import AvatarBauhaus from './avatar-bauhaus';
import AvatarRing from './avatar-ring';
import AvatarPixel from './avatar-pixel';
import AvatarBeam from './avatar-beam';
import AvatarSunset from './avatar-sunset';
import AvatarMarble from './avatar-marble';

const AVATAR_VARIANTS = {
  pixel: AvatarPixel,
  bauhaus: AvatarBauhaus,
  ring: AvatarRing,
  beam: AvatarBeam,
  sunset: AvatarSunset,
  marble: AvatarMarble,
};

const DEPRECATED_VARIANTS = {
  geometric: 'beam',
  abstract: 'bauhaus',
};

const Avatar = ({
  variant = 'marble',
  colors = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
  name = 'Clara Barton',
  title = false,
  size,
  square = false,
  random = false,
  ...otherProps
}) => {
  const resolvedVariant = DEPRECATED_VARIANTS[variant] || variant;
  const AvatarComponent = AVATAR_VARIANTS[resolvedVariant] || AvatarMarble;

  return (
    <AvatarComponent
      colors={colors}
      name={name}
      title={title}
      size={size}
      square={square}
      random={random}
      {...otherProps}
    />
  );
};

Avatar.propTypes = {
  variant: PropTypes.oneOf(Object.keys(AVATAR_VARIANTS).concat(Object.keys(DEPRECATED_VARIANTS))),
  colors: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  square: PropTypes.bool,
  title: PropTypes.bool,
  random: PropTypes.bool,
};

export default Avatar;
