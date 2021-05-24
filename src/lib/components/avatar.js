import React from 'react'
import PropTypes from 'prop-types'
import AvatarDome from './avatar-dome'
import AvatarBauhaus from './avatar-bauhaus'
import AvatarRing from './avatar-ring'
import AvatarPixel from './avatar-pixel'
import AvatarBeam from './avatar-beam'
import AvatarSunset from './avatar-sunset'
import AvatarMarble from './avatar-marble'

const variants = ['pixel','bauhaus','ring','beam','sunset','dome','marble']

const Avatar = ({
  variant = 'marble',
  colors = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
  name = 'Clara Barton',
  size = 40,
  ...props
}) => {
  const avatarProps = {colors, name, size, ...props}
  const checkedVariant = variants.includes(variant) ? variant : 'marble'
  const avatars = {
    pixel: <AvatarPixel {...avatarProps}/>,
    bauhaus: <AvatarBauhaus {...avatarProps}/>,
    ring: <AvatarRing {...avatarProps}/>,
    beam: <AvatarBeam {...avatarProps}/>,
    sunset: <AvatarSunset {...avatarProps}/>,
    dome: <AvatarDome {...avatarProps}/>,
    marble: <AvatarMarble {...avatarProps}/>,
  }
  return avatars[checkedVariant]
}

Avatar.propTypes = {
  variant: PropTypes.oneOf(variants)
}

export default Avatar