import AvatarBauhaus from './components/avatar-bauhaus';
import AvatarRing from './components/avatar-ring';
import AvatarPixel from './components/avatar-pixel';
import AvatarBeam from './components/avatar-beam';
import AvatarSunset from './components/avatar-sunset';
import AvatarMarble from './components/avatar-marble';
import type { AvatarProps } from './components/types';

const AVATAR_VARIANTS = {
  pixel: AvatarPixel,
  bauhaus: AvatarBauhaus,
  ring: AvatarRing,
  beam: AvatarBeam,
  sunset: AvatarSunset,
  marble: AvatarMarble,
  geometric: AvatarBeam, // Deprecated, use 'beam'
  abstract: AvatarBauhaus, // Deprecated, use 'bauhaus'
};

const Avatar = ({
  variant = 'marble',
  colors = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
  name = 'Clara Barton',
  title = false,
  size = '40px',
  square = false,
  ...otherProps
}: AvatarProps & { variant?: keyof typeof AVATAR_VARIANTS; }) => {
  const AvatarComponent = AVATAR_VARIANTS[variant] || AvatarMarble;

  return (
    <AvatarComponent
      colors={colors}
      name={name}
      title={title}
      size={size}
      square={square}
      {...otherProps}
    />
  );
};

export default Avatar;