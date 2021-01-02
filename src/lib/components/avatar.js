import React from 'react'
import PropTypes from 'prop-types'
import AvatarGeometric from './avatar-geometric'
import AvatarAbstract from './avatar-abstract'

const Avatar = ({ variant, colors, name, size, ...props }) => {
  if(variant === 'abstract') {
    return (
      <AvatarAbstract colors={colors} name={name} size={size} {...props}/>
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
  size: 32,
}

Avatar.propTypes = {
  variant: PropTypes.oneOf(['geometric', 'abstract'])
}

export default Avatar