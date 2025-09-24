import type { SVGProps } from 'react';

export type AvatarProps = {
  name?: string;
  colors?: string[];
  title?: boolean;
  square?: boolean;
  size?: number | string;
} & SVGProps<SVGSVGElement>;
