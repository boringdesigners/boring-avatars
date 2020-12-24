import React, { useState } from 'react'
import styled from 'styled-components'
import AvatarGeometric from '../avatar/components/avatar-geometric'
import { SegmentGroup, Segment, Button, BaseStyles, ColorDot } from './ui-system'
import colors from 'nice-color-palettes'
import { exampleNames } from './example-names'

const paletteColors = colors

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: var(--pagePadding);
  align-items: center;
`

const SettingsSection = styled.div`
  display: inline-grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  max-width: max-content;
`

const ColorsSection = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
`

const AvatarsGrid = styled.div`
  display: grid;
  grid-gap: var(--sp-l) var(--sp-s);
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  padding: var(--pagePadding);
`

const AvatarContainer = styled.div`
  display: grid;
  grid-gap: var(--sp-s);
  padding: 0 var(--sp-m);
  font-size: 0.8rem;
`

const AvatarSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  padding: var(--textbox);
  font: inherit;
  color: inherit;
  border: 1px solid transparent;
  transition: 0.5s;
  width: 100%;
  text-align: center;
  border-radius: 100rem;
  background: transparent;

  &:hover {
    border-color: var(--c-fieldHover);
    transition: 0.2s;
  }

  &:focus {
    border-color: var(--c-fieldFocus);
    outline: none;
  }
`

const AvatarWrapper = ({ name, playgroundColors, size }) => {
  const [avatarName, setAvatarName] = useState(name)
  const handleFocus = (event) => event.target.select()

  return (
    <AvatarContainer>
      <AvatarSection>
        <AvatarGeometric name={name} colors={playgroundColors} size={size}/>
      </AvatarSection>
      <Input
        value={avatarName}
        onChange={e => setAvatarName(e.target.value)}
        onFocus={(e) => handleFocus(e)}
      />
    </AvatarContainer>
  )
}

const getRandomPaletteIndex = () => Math.floor(Math.random() * paletteColors.length)

const avatarSizes = {
  small: 32,
  medium: 80,
  large: 128,
}

const Playground = () => {
  const defaultPlaygroundColors = paletteColors[getRandomPaletteIndex()]
  const [playgroundColors, setPlaygroundColors] = useState(defaultPlaygroundColors)

  const [darkMode, setDarkMode] = useState(false)
  const [dotColor0, setDotColor0] = useState(playgroundColors[0])
  const [dotColor1, setDotColor1] = useState(playgroundColors[1])
  const [dotColor2, setDotColor2] = useState(playgroundColors[2])
  const [dotColor3, setDotColor3] = useState(playgroundColors[3])
  const [dotColor4, setDotColor4] = useState(playgroundColors[4])

  const filteredColors = [dotColor0, dotColor1, dotColor2, dotColor3, dotColor4]

  const handleRandomColors = () => {
    setPlaygroundColors(paletteColors[getRandomPaletteIndex()])
    setDotColor0(playgroundColors[0])
    setDotColor1(playgroundColors[1])
    setDotColor2(playgroundColors[2])
    setDotColor3(playgroundColors[3])
    setDotColor4(playgroundColors[4])
  }

  const [avatarSize, setAvatarSize] = useState(avatarSizes.small)

  return (
    <>
      <BaseStyles darkMode={darkMode} />
      <Header>
        <SettingsSection>
          <SegmentGroup>
            <Segment>Geometric</Segment>
            <Segment>Texture</Segment>
            <Segment>Abstract</Segment>
          </SegmentGroup>
          <ColorsSection>
            <ColorDot value={dotColor0} onChange={(color) => setDotColor0(color)} />
            <ColorDot value={dotColor1} onChange={(color) => setDotColor1(color)} />
            <ColorDot value={dotColor2} onChange={(color) => setDotColor2(color)} />
            <ColorDot value={dotColor3} onChange={(color) => setDotColor3(color)} />
            <ColorDot value={dotColor4} onChange={(color) => setDotColor4(color)} />
          </ColorsSection>
        </SettingsSection>

        <div>
          <Button onClick={() => setAvatarSize(avatarSizes.small)}>Small</Button>
          <Button onClick={() => setAvatarSize(avatarSizes.medium)}>Medium</Button>
          <Button onClick={() => setAvatarSize(avatarSizes.large)}>Large</Button>
          <Button onClick={() => handleRandomColors()}>Random colors</Button>
          <Button>Random names</Button>
          <Button onClick={() => setDarkMode(!darkMode)}>Mode</Button>
        </div>
      </Header>

      <AvatarsGrid>
        {exampleNames.map((exampleName, name) => (
          <AvatarWrapper key={name} size={avatarSize} name={exampleName} playgroundColors={filteredColors} />
        ))}
      </AvatarsGrid>
    </>
  )
}

export default Playground