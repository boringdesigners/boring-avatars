# Boring Avatars

Boring avatars is a tiny JavaScript React library that generates custom, SVG-based avatars from any username and color palette.
<a href="https://www.npmjs.com/package/boring-avatars">

![hi](https://badgen.net/npm/v/boring-avatars)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</a>

![boring avatars preview](https://github.com/boringdesigners/boring-avatars/blob/master/public/boring-avatars-preview.png?raw=true)

## Install

```
npm install boring-avatars
```

## Usage

```jsx
import Avatar from 'boring-avatars';

<Avatar
  size={40}
  name="Maria Mitchell"
  variant="marble"
  colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
/>;
```

### Props

| Prop    | Type                                                                   |
| ------- | ---------------------------------------------------------------------- |
| size    | number or string, `40px` (default)                                     |
| square  | boolean: `false` (default)                                             |
| title   | boolean: `false` (default)                                             |
| name    | string                                                                 |
| variant | oneOf: `marble` (default), `beam`, `pixel`,`sunset`, `ring`, `bauhaus` |
| colors  | array of colors                                                        |




## Boring Avatars Service (discontinued)

Due to unexpectedly high demand and associated billing costs, we are discontinuing this service. We apologize for any inconvenience caused and appreciate your understanding.
