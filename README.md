<img width="1392" alt="boring-avatars" src="https://user-images.githubusercontent.com/912236/117571068-4063d200-b0cd-11eb-8de6-2a8471501d19.png">


<a href="https://www.npmjs.com/package/boring-avatars">

![hi](https://badgen.net/npm/v/boring-avatars)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


</a>

# Boring Avatars

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

<div>
  <Avatar
    size="64px"
    name="Maria Mitchell"
    variant="abstract"
    colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
  />
</div>;
```

### Props

| Prop    | Type                                              |
| ------- | ------------------------------                    |
| size    | number or string                                  |
| name    | string                                            |
| variant | oneOf: "marble", "beam", "abstract", "geometric"  |
| colors  | array of colors                                   |

---

**Built with**
[Create React Library](https://github.com/DimiMikadze/create-react-library)
