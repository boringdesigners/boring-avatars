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

const AvatarWrapper = ({ name, playgroundColors }) => {
  const [avatarName, setAvatarName] = useState(name)
  const handleFocus = (event) => event.target.select()

  return (
    <AvatarContainer>
      <AvatarSection>
        <AvatarGeometric name={name} colors={playgroundColors} size={80}/>
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

const Playground = () => {
  const defaultPlaygroundColors = paletteColors[31]
  const [playgroundColors, setPlaygroundColors] = useState(defaultPlaygroundColors)
  
  const handleRandomColors = () => {
    setPlaygroundColors(paletteColors[getRandomPaletteIndex()])
  }
  
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <BaseStyles darkMode={darkMode} />
      <Header>
        <SettingsSection>
          <SegmentGroup>
            <Segment>Texture</Segment>
            <Segment>Geometric</Segment>
            <Segment>Abstract</Segment>
          </SegmentGroup>
          <ColorsSection>
            {playgroundColors.map((playgroundColor, index) => (
              <ColorDot color={playgroundColor} key={index} />
            ))}
          </ColorsSection>
        </SettingsSection>

        <div>
          <Button onClick={() => handleRandomColors()}>Random colors</Button>
          <Button>Random names</Button>
          <Button onClick={() => setDarkMode(!darkMode)}>Mode</Button>
        </div>
      </Header>

      <AvatarsGrid>
        {exampleNames.map((exampleName) => (
          <AvatarWrapper name={exampleName} playgroundColors={playgroundColors} />
        ))}
      </AvatarsGrid>
    </>
  )
}

export default Playground