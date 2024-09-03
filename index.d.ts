declare module 'boring-avatars' {
  import * as React from 'react';

  export interface AvatarProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    name?: string;
    square?: boolean;
    variant?: 'marble' | 'beam' | 'pixel' | 'sunset' | 'ring' | 'bauhaus';
    colors?: string[];
    [key: string]: any; // Allows any additional prop
  }

  interface AvatarComponent {
    (props: AvatarProps, context?: any): React.ReactElement | null;
  }

  const Avatar: AvatarComponent;

  export default Avatar;
}
