import React from 'react'
import PropTypes from 'prop-types'
import AvatarGeometric from './avatar-geometric'
import AvatarAbstract from './avatar-abstract'
import AvatarCircle from './avatar-circle'
import AvatarBeam from './avatar-beam'
import AvatarMarble from './avatar-marble'

const Avatar = ({ variant, colors, name, size, ...props }) => {
  if(variant === 'abstract') {
    return (
      <AvatarAbstract colors={colors} name={name} size={size} {...props}/>
    )
  }
  if(variant === 'circle') {
    return (
      <AvatarCircle colors={colors} name={name} size={size} {...props}/>
    )
  }
  if(variant === 'beam') {
    return (
      <AvatarBeam colors={colors} name={name} size={size} {...props}/>
    )
  }
  if(variant === 'geometric') {
    return (
      <AvatarGeometric colors={colors} name={name} size={size} {...props}/>
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
  variant: PropTypes.oneOf(['geometric', 'abstract', 'marble', 'beam'])
}

export default Avatar