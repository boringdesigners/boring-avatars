import * as React from 'react';

const AvatarImage = (props) => {
  const styles = {
    borderRadius: props.square ? 'inherit' : '50%',
  };
  return (
    <img
      style={styles}
      width={props.size}
      height={props.size}
      src={props.src}
      alt={props.name}
    >
    </img>
  );
};

export default AvatarImage;
