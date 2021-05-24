import React from 'react'
import PropTypes from 'prop-types'
import AvatarDome from './avatar-dome'
import AvatarMoholy from './avatar-moholy'
import AvatarRing from './avatar-ring'
import AvatarBeam from './avatar-beam'
import AvatarStrata from './avatar-strata'
import AvatarMarble from './avatar-marble'

const Avatar = ({ variant, colors, name, size, ...props }) => {
  if(variant === 'moholy') {
    return (
      <AvatarMoholy colors={colors} name={name} size={size} {...props}/>
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
  if(variant === 'strata') {
    return (
      <AvatarStrata colors={colors} name={name} size={size} {...props}/>
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
  variant: PropTypes.oneOf(['dome', 'moholy', 'marble', 'beam', 'ring'])
}

export default Avatar