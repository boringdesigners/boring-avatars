import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import AvatarBauhaus from './avatar-bauhaus'
import AvatarRing from './avatar-ring'
import AvatarPixel from './avatar-pixel'
import AvatarBeam from './avatar-beam'
import AvatarSunset from './avatar-sunset'
import AvatarMarble from './avatar-marble'

const AVATAR_COMPONENTS = {
  pixel: AvatarPixel,
  bauhaus: AvatarBauhaus,
  ring: AvatarRing,
  beam: AvatarBeam,
  sunset: AvatarSunset,
  marble: AvatarMarble,
}

const variants = ['pixel', 'bauhaus', 'ring', 'beam', 'sunset', 'marble']
const deprecatedVariants = { geometric: 'beam', abstract: 'bauhaus' }

const checkVariant = (variant) => {
  if (Object.keys(deprecatedVariants).includes(variant)) {
    return deprecatedVariants[variant]
  }
  if (variants.includes(variant)) {
    return variant
  }
  return 'marble'
}

const Avatar = (props) => {
  const { variant, ...avatarProps } = props

  const Component = useMemo(() => AVATAR_COMPONENTS[checkVariant(variant)], [variant])

  return <Component {...avatarProps} />
}

Avatar.propTypes = {
  color: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  size: PropTypes.number,
  variant: PropTypes.oneOf(variants),
  borderRadius: PropTypes.number,
}

Avatar.defaultProps = {
  color: ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
  name: 'Clara Barton',
  size: 40,
  variant: 'marble',
  borderRadius: 20,
}

export default Avatar
