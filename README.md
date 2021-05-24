![boring avatars preview](https://github.com/boringdesigners/boring-avatars/blob/master/public/boring-avatars-preview.png?raw=true)


<a href="https://www.npmjs.com/package/boring-avatars">

![hi](https://badgen.net/npm/v/boring-avatars)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


</a>

# Boring Avatars

Boring avatars is a tiny JavaScript React library that generates custom, SVG-based, round avatars from any username and color palette.

## Install

```
yarn add import boring-avatars
```

or

```
npm install import boring-avatars
```

## Usage

```jsx
import Avatar from "boring-avatars";

<Avatar
  size="64px"
  name="Maria Mitchell"
  variant="abstract"
  colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
/>


```

### Props

| Prop    | Type                                              |
| ------- | ------------------------------                    |
| size    | number or string                                  |
| name    | string                                            |
| variant | oneOf: `marble`, `beam`, `ring`, `moholy`, `dome` |
| colors  | array of colors                                   |





