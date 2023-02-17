declare module "boring-avatars" {
  export interface AvatarProps {
    size?: number | string;
    name?: string;
    square?: boolean;
    variant?: "marble" | "beam" | "pixel" | "sunset" | "ring" | "bauhaus" | "image";
    colors?: string[];
    src?: string;
  }

  interface AvatarComponent {
    (props: AvatarProps, context?: any): React.ReactElement | null;
  }

  const Avatar: AvatarComponent

  export default Avatar;
}
