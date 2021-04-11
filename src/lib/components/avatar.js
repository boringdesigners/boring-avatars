import React from 'react'
import PropTypes from 'prop-types'
import AvatarGeometric from './avatar-geometric'
import AvatarAbstract from './avatar-abstract'
import AvatarBeam from './avatar-beam'
import AvatarEye from './avatar-eye'
import AvatarMesh from './avatar-mesh'

const Avatar = ({ variant, colors, name, size, ...props }) => {
  if(variant === 'abstract') {
    return (
      <AvatarAbstract colors={colors} name={name} size={size} {...props}/>
    )
  }
  if(variant === 'beam') {
    return (
      <AvatarBeam colors={colors} name={name} size={size} {...props}/>
    )
  }
  if(variant === 'eye') {
    return (
      <AvatarEye colors={colors} name={name} size={size} {...props}/>
    )
  }
  if(variant === 'mesh') {
    return (
      <AvatarMesh colors={colors} name={name} size={size} {...props}/>
    )
  }
  return (
    <AvatarGeometric colors={colors} name={name} size={size} {...props}/>
  )
}

Avatar.defaultProps = {
  variant: 'geometric',
  colors: ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
  name: 'abcdefg',
  size: 40,
}

Avatar.propTypes = {
  variant: PropTypes.oneOf(['geometric', 'abstract'])
}

export default Avatar