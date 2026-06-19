# Boring avatars

Boring avatars is a tiny JavaScript React library that generates custom, SVG-based avatars from any username and color palette.
<a href="https://www.npmjs.com/package/boring-avatars">

![hi](https://badgen.net/npm/v/boring-avatars)

</a>

## Install

```
npm install boring-avatars
```

## Usage

```jsx
import Avatar from 'boring-avatars';

<Avatar name="Maria Mitchell" />;
```

### Props

| Prop    | Type                                                         | Default                                                   |
|---------|--------------------------------------------------------------|-----------------------------------------------------------|
| size    | number or string                                             | `40px`                                                    |
| square  | boolean                                                      | `false`                                                   |
| title   | boolean                                                      | `false`                                                   |
| name    | string                                                       | `Clara Barton`                                            |
| variant | oneOf: `marble`, `beam`, `pixel`,`sunset`, `ring`, `bauhaus` | `marble`                                                  |
| colors  | array                                                        | `['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']` |


#### Name
The `name` prop is used to generate the avatar. It can be the username, email or any random string.

```jsx
<Avatar name="Maria Mitchell"/>
```

#### Variant
The `variant` prop is used to change the theme of the avatar. The available variants are: `marble`, `beam`, `pixel`, `sunset`, `ring` and `bauhaus`.

```jsx
<Avatar name="Alice Paul" variant="beam"/>
```

#### Size
The `size` prop is used to change the size of the avatar.

```jsx
<Avatar name="Ada Lovelace" size={88}/>
```

#### Colors
The `colors` prop is used to change the color palette of the avatar.

```jsx
<Avatar name="Grace Hopper" colors={["#fb6900", "#f63700", "#004853", "#007e80", "#00b9bd"]}/>
```

#### Square
The `square` prop is used to make the avatar square.

```jsx
<Avatar name="Helen Keller" square/>
```

## API service

If you need to generate avatars on a large scale or if you just want to avoid using the React library, we offer a subscription plan for our API service.


 [Gumroad subscription](https://boringdesigners.gumroad.com/l/boring-avatars-service).

## Sponsors

[![TestMu AI](assets/testmu-ai-logo.png)](https://www.testmuai.com)

Boring avatars is generously sponsored by [TestMu AI](https://www.testmuai.com).

TestMu AI (formerly LambdaTest) is the world's first full-stack agentic AI quality engineering platform. Autonomous AI agents plan, author, execute, analyze, and optimize tests with humans in the loop, across 3,000+ browser/OS combinations and 10,000+ real devices. Trusted by 18,000+ enterprises including Microsoft, OpenAI, NVIDIA, and Vimeo.

Explore the platform: https://www.testmuai.com
