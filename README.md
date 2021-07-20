
# Boring Avatars

Boring avatars is a tiny JavaScript React library that generates custom, SVG-based, round avatars from any username and color palette.

![boring avatars preview](https://github.com/boringdesigners/boring-avatars/blob/master/public/boring-avatars-preview.png?raw=true)

<a href="https://www.npmjs.com/package/boring-avatars">

![hi](https://badgen.net/npm/v/boring-avatars)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</a>

## Install

```
yarn add boring-avatars
```

or

```
npm install boring-avatars
```

## Usage

```jsx
import Avatar from "boring-avatars";

<Avatar
  size={40}
  name="Maria Mitchell"
  variant="marble"
  colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
/>;
```

### Props

| Prop    | Type                                                         |
| ------- | ------------------------------------------------------------ |
| size    | number or string                                             |
| square  | boolean                                                      |
| name    | string                                                       |
| variant | oneOf: `marble`, `beam`, `pixel`,`sunset`, `ring`, `bauhaus` |
| colors  | array of colors                                              |


## Source

You can embed your boring avatars using the boring avatars source.

To choose a random avatar from a specific user and a color palette, the format follows:

```
https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51
```
![Avatar for Maria Mitchell](https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51)


For more information, [check out the README](https://github.com/hihayk/boring-avatars-service/blob/main/README.md)

## Community Supported Ports

To use boring avatars outside of React, check out these alternative implementations.

- [Vue](https://github.com/mujahidfa/vue-boring-avatars)
- [Laravel Blade](https://github.com/khaled-sadek/blade-boring-avatars)
- [React Native](https://github.com/luhart/react-native-boring-avatars)

If you don't see a port you're looking for, we'd encourage you to create your own.
