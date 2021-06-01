import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { SegmentGroup, Segment, Button, BaseStyles, ColorDot } from './ui-system'
import colors from 'nice-color-palettes'
import { exampleNames } from './example-names'
import Avatar from '../lib'
import { CopyToClipboard } from 'react-copy-to-clipboard'

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

const AvatarWrapper = ({ name, playgroundColors, size, variant }) => {
  const [avatarName, setAvatarName] = useState(name)
  const handleFocus = (event) => event.target.select()
  const ref = useRef();
  const [copyValue, setCopyValue] = useState(name)

  useEffect(() => {
    if(ref.current) {
      const svgNode = ref.current.innerHTML
      const svgStart = svgNode.indexOf('<svg')
      const svgEnd = svgNode.indexOf('</svg>') + 6
      const svgResult = svgNode.substring(svgStart, svgEnd).toString()

      setCopyValue(svgResult)
    }
  }, [copyValue, variant, playgroundColors])

  return (
    <AvatarContainer>
      <AvatarSection className="Avatar" ref={ref}>
        <Avatar
          name={avatarName}
          colors={playgroundColors}
          size={size}
          variant={variants[variant]}
        />
      </AvatarSection>
      <Input
        value={avatarName}
        onChange={e => setAvatarName(e.target.value)}
        onFocus={(e) => handleFocus(e)}
      />
      <CopyToClipboard text={copyValue}>
        <Button>Copy</Button>
      </CopyToClipboard>
    </AvatarContainer>
  )
}

const getRandomPaletteIndex = () => Math.floor(Math.random() * paletteColors.length)

const avatarSizes = {
  small: 40,
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

const variants = {
  bauhaus: 'bauhaus',
  ring: 'ring',
  sunset: 'sunset',
  pixel: 'pixel',
  marble: 'marble',
  beam: 'beam'
}

const Playground = () => {
  const defaultPlaygroundColors = paletteColors[66]
  const [playgroundColors, setPlaygroundColors] = useState(defaultPlaygroundColors)

  const [darkMode, setDarkMode] = useState(false)
  const [dotColor0, setDotColor0] = useState(playgroundColors[0])
  const [dotColor1, setDotColor1] = useState(playgroundColors[1])
  const [dotColor2, setDotColor2] = useState(playgroundColors[2])
  const [dotColor3, setDotColor3] = useState(playgroundColors[3])
  const [dotColor4, setDotColor4] = useState(playgroundColors[4])

  const filteredColors = [dotColor0, dotColor1, dotColor2, dotColor3, dotColor4]

  const handleRandomColors = () => {
    setPlaygroundColors(
      paletteColors[getRandomPaletteIndex()]
    )
  }

  useEffect(() => {
    setDotColor0(playgroundColors[0])
    setDotColor1(playgroundColors[1])
    setDotColor2(playgroundColors[2])
    setDotColor3(playgroundColors[3])
    setDotColor4(playgroundColors[4])
  }, [playgroundColors])

  const [avatarSize, setAvatarSize] = useState(avatarSizes.medium)
  const [variant, setVariant] = useState(variants.pixel)

  return (
    <>
      <BaseStyles darkMode={darkMode} />
      <Header>
        <SegmentGroup>
          <Segment onClick={() => setVariant(variants.pixel)} isSelected={variant === variants.pixel}>Pixel</Segment>
          <Segment onClick={() => setVariant(variants.sunset)} isSelected={variant === variants.sunset}>Sunset</Segment>
          <Segment onClick={() => setVariant(variants.ring)} isSelected={variant === variants.ring}>Ring</Segment>
          <Segment onClick={() => setVariant(variants.marble)} isSelected={variant === variants.marble}>Marble</Segment>
          <Segment onClick={() => setVariant(variants.beam)} isSelected={variant === variants.beam}>Beam</Segment>
          <Segment onClick={() => setVariant(variants.bauhaus)} isSelected={variant === variants.bauhaus}>Bauhaus</Segment>
        </SegmentGroup>
        <ColorsSection>
          <ColorDot value={dotColor0} onChange={(color) => setDotColor0(color)} />
          <ColorDot value={dotColor1} onChange={(color) => setDotColor1(color)} />
          <ColorDot value={dotColor2} onChange={(color) => setDotColor2(color)} />
          <ColorDot value={dotColor3} onChange={(color) => setDotColor3(color)} />
          <ColorDot value={dotColor4} onChange={(color) => setDotColor4(color)} />
        </ColorsSection>

        <Button onClick={() => handleRandomColors()}>Random palette</Button>
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
          <AvatarWrapper
            key={name}
            size={avatarSize}
            name={exampleName}
            playgroundColors={filteredColors}
            variant={variant}
          />
        ))}
      </AvatarsGrid>
    </>
  )
}

export default Playground