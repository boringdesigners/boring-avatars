import React from 'react'
import PropTypes from 'prop-types'
import AvatarDome from './avatar-dome'
import AvatarBauhaus from './avatar-bauhaus'
import AvatarRing from './avatar-ring'
import AvatarPixel from './avatar-pixel'
import AvatarBeam from './avatar-beam'
import AvatarSunset from './avatar-sunset'
import AvatarMarble from './avatar-marble'

const Avatar = ({ variant, colors, name, size, ...props }) => {
  if(variant === 'pixel') {
    return (
      <AvatarPixel colors={colors} name={name} size={size} {...props}/>
    )
  }
  if(variant === 'bauhaus') {
    return (
      <AvatarBauhaus colors={colors} name={name} size={size} {...props}/>
    )
  }
  if(variant === 'ring') {
    return (
      <AvatarRing colors={colors} name={name} size={size} {...props}/>
    )
  }
  if(variant === 'beam') {
    return (
      <AvatarBeam colors={colors} name={name} size={size} {...props}/>
    )
  }
  if(variant === 'sunset') {
    return (
      <AvatarSunset colors={colors} name={name} size={size} {...props}/>
    )
  }
  if(variant === 'dome') {
    return (
      <AvatarDome colors={colors} name={name} size={size} {...props}/>
      )
    }
    return (
    <AvatarMarble colors={colors} name={name} size={size} {...props}/>
  )
}

Avatar.defaultProps = {
  variant: 'marble',
  colors: ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
  name: 'Clara Barton',
  size: 40,
}

Avatar.propTypes = {
  variant: PropTypes.oneOf(['dome', 'pixel', 'sunset', 'bauhaus', 'marble', 'beam', 'ring'])
}

export default Avatar