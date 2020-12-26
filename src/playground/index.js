import React, { useState } from 'react'
import styled from 'styled-components'
import AvatarGeometric from '../avatar/components/avatar-geometric'
import AvatarAbstract from '../avatar/components/avatar-abstract'
import { SegmentGroup, Segment, Button, BaseStyles, ColorDot } from './ui-system'
import colors from 'nice-color-palettes'
import { exampleNames } from './example-names'

const paletteColors = colors

const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto auto auto auto;
  padding: var(--pagePadding);
  align-items: center;
  grid-gap: var(--sp-s);
`

const ColorsSection = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: max-content;
  grid-gap: var(--sp-xs);
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
        {/* <AvatarGeometric name={avatarName} colors={playgroundColors} size={size}/> */}
        <AvatarAbstract name={avatarName} colors={playgroundColors} size={size}/>
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

const SizeDotWrapper = styled(Button)`
  ${p => p.isSelected && `background-color: var(--c-background)`};
  ${p => !p.isSelected && `color: var(--c-fade)`};

  &:hover {
    ${p => p.isSelected && `background-color: var(--c-background)`};
  }
`

const Dot = styled.div`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  background-color: currentColor;
  border-radius: 10rem;
`

const SizeDot = ({size, isSelected, ...props}) => {
  const getSize = () => {
    switch(size) {
      case avatarSizes.small:
        return 8
      case avatarSizes.medium:
        return 14
      case avatarSizes.large:
        return 20
      default:
        return 0
    }
  }
  return(
    <SizeDotWrapper isSelected={isSelected} icon={<Dot size={getSize()}/>} {...props} />
  )
}

const Playground = () => {
  const defaultPlaygroundColors = paletteColors[7]
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

  const [avatarSize, setAvatarSize] = useState(avatarSizes.medium)

  return (
    <>
      <BaseStyles darkMode={darkMode} />
      <Header>
        <SegmentGroup>
          <Segment isSelected>Geometric</Segment>
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

        <Button
          onClick={() => handleRandomColors()}
          icon={
            <svg width={20} height={20} fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 0a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4V4a4 4 0 00-4-4H4zm6 12a2 2 0 100-4 2 2 0 000 4zm-3 2a2 2 0 11-4 0 2 2 0 014 0zm8 2a2 2 0 100-4 2 2 0 000 4zM7 6a2 2 0 11-4 0 2 2 0 014 0zm8 2a2 2 0 100-4 2 2 0 000 4z"
                fill="currentColor"
              />
            </svg>
          }
        />
        <Button
          icon={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 0C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0H4ZM10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM7 14C7 15.1046 6.10457 16 5 16C3.89543 16 3 15.1046 3 14C3 12.8954 3.89543 12 5 12C6.10457 12 7 12.8954 7 14ZM15 8C16.1046 8 17 7.10457 17 6C17 4.89543 16.1046 4 15 4C13.8954 4 13 4.89543 13 6C13 7.10457 13.8954 8 15 8Z" fill="currentColor"/>
            </svg>
          }
        />
        <SegmentGroup>
          {Object.entries(avatarSizes).map(([key, value], index) => (
            <SizeDot
              key={index}
              onClick={() => setAvatarSize(value)}
              isSelected={value === avatarSize}
              size={value}
            />
          ))}
        </SegmentGroup>

        <Button
          onClick={() => setDarkMode(!darkMode)}
          icon={
            <svg width={20} height={20} fill="none">
              <circle cx={10} cy={10} r={9} stroke="currentColor" strokeWidth={2} />
              <path d="M10 0a10 10 0 000 20V0z" fill="currentColor" />
            </svg>
          }
        />
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