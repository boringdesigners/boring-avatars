![boring avatars preview](https://github.com/boringdesigners/boring-avatars/blob/master/public/boring-avatars-preview.png?raw=true)

<a href="https://www.npmjs.com/package/boring-avatars">

![hi](https://badgen.net/npm/v/boring-avatars)

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
    name="Mike"
    variant="abstract"
    colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
  />
</div>;
```

### Props

| Prop    | Type                           |
| ------- | ------------------------------ |
| size    | number or string               |
| name    | string                         |
| variant | oneOf: "abstract", "geometric" |
| colors  | array of colors                |

---

**Built with**
[Create React Library](https://github.com/DimiMikadze/create-react-library)
