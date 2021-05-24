import React from 'react'
import PropTypes from 'prop-types'
import AvatarDome from './avatar-dome'
import AvatarBauhaus from './avatar-bauhaus'
import AvatarRing from './avatar-ring'
import AvatarPixel from './avatar-pixel'
import AvatarBeam from './avatar-beam'
import AvatarSunset from './avatar-sunset'
import AvatarMarble from './avatar-marble'

const Avatar = ({ variant = 'marble', colors = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'], name = 'Clara Barton', size = 40, ...props }) => {
  const avatars = {
    pixel: <AvatarPixel colors={colors} name={name} size={size} {...props}/>,
    bauhaus: <AvatarBauhaus colors={colors} name={name} size={size} {...props}/>,
    ring: <AvatarRing colors={colors} name={name} size={size} {...props}/>,
    beam: <AvatarBeam colors={colors} name={name} size={size} {...props}/>,
    sunset: <AvatarSunset colors={colors} name={name} size={size} {...props}/>,
    dome: <AvatarDome colors={colors} name={name} size={size} {...props}/>,
    marble: <AvatarMarble colors={colors} name={name} size={size} {...props}/>,
  }
  return avatars[variant]
}

Avatar.propTypes = {
  variant: PropTypes.oneOf(['dome', 'pixel', 'sunset', 'bauhaus', 'marble', 'beam', 'ring'])
}

export default Avatar