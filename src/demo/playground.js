import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { SegmentGroup, Segment, Button, BaseStyles, ColorDot } from './ui-system';
import colors from 'nice-color-palettes/1000';
import { exampleNames } from './example-names';
import Avatar from '../lib';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const paletteColors = colors;

const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto auto auto auto;
  padding: var(--pagePadding);
  align-items: center;
  grid-gap: var(--sp-s);
`;

const ColorsSection = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: max-content;
  grid-gap: var(--sp-xs);
`;

const AvatarsGrid = styled.div`
  display: grid;
  grid-gap: var(--sp-l) var(--sp-s);
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  padding: var(--pagePadding);
`;

const AvatarContainer = styled.div`
  display: grid;
  grid-gap: var(--sp-s);
  padding: 0 var(--sp-m);
  font-size: 0.8rem;
`;

const AvatarSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
`;

const CopyWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`

const AvatarWrapper = ({ name, playgroundColors, size, square, variant }) => {
  const [avatarName, setAvatarName] = useState(name);
  const handleFocus = (event) => event.target.select();
  const ref = useRef();
  const [svgCopyValue, setSvgCopyValue] = useState(name);
  const [apiCopyValue, setApiCopyValue] = useState(`https://source.boringavatars.com/${variant}/${size}/${name}`);

  useEffect(() => {
    if (ref.current) {
      const svgNode = ref.current.innerHTML;
      const svgStart = svgNode.indexOf('<svg');
      const svgEnd = svgNode.indexOf('</svg>') + 6;
      const svgResult = svgNode.substring(svgStart, svgEnd).toString();

      setSvgCopyValue(svgResult);
    }
  }, [apiCopyValue, svgCopyValue, variant, playgroundColors]);

  useEffect(() => {
    setApiCopyValue(`https://source.boringavatars.com/${variant}/${size}/${encodeURIComponent(name)}?colors=${playgroundColors.join(',').replaceAll('#','')}${square ? '&square' : ''}`)
  }, [variant, size, name, playgroundColors, apiCopyValue, square])

  return (
    <AvatarContainer>
      <AvatarSection className="Avatar" ref={ref}>
        <Avatar
          name={avatarName}
          colors={playgroundColors}
          size={size}
          variant={variants[variant]}
          square={square}
        />
      </AvatarSection>
      <Input
        value={avatarName}
        onChange={(e) => setAvatarName(e.target.value)}
        onFocus={(e) => handleFocus(e)}
      />
      <CopyWrapper>
        <CopyToClipboard text={svgCopyValue}>
          <Button title="Copy SVG">
            <svg
              name="viewfinder"
              height="16"
              width="16"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M4.25 2A2.25 2.25 0 002 4.25v2a.75.75 0 001.5 0v-2a.75.75 0 01.75-.75h2a.75.75 0 000-1.5h-2zM13.75 2a.75.75 0 000 1.5h2a.75.75 0 01.75.75v2a.75.75 0 001.5 0v-2A2.25 2.25 0 0015.75 2h-2zM3.5 13.75a.75.75 0 00-1.5 0v2A2.25 2.25 0 004.25 18h2a.75.75 0 000-1.5h-2a.75.75 0 01-.75-.75v-2zM18 13.75a.75.75 0 00-1.5 0v2a.75.75 0 01-.75.75h-2a.75.75 0 000 1.5h2A2.25 2.25 0 0018 15.75v-2zM7 10a3 3 0 116 0 3 3 0 01-6 0z"></path>
            </svg>
          </Button>
        </CopyToClipboard>
        <CopyToClipboard text={apiCopyValue}>
          <Button title="Copy API Url">
            <svg
              name="link"
              fill="currentColor"
              height="16"
              width="16"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
            </svg>
          </Button>
        </CopyToClipboard>
      </CopyWrapper>
    </AvatarContainer>
  );
};

const getRandomPaletteIndex = () => Math.floor(Math.random() * paletteColors.length);

const avatarSizes = {
  small: 40,
  medium: 80,
  large: 128,
};

const SizeDotWrapper = styled(Button)`
  ${(p) => p.isSelected && `background-color: var(--c-background)`};
  ${(p) => !p.isSelected && `color: var(--c-fade)`};

  &:hover {
    ${(p) => p.isSelected && `background-color: var(--c-background)`};
  }
`;

const Dot = styled.div`
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  background-color: currentColor;
  border-radius: 10rem;
`;

const SizeDot = ({ size, isSelected, ...props }) => {
  const getSize = () => {
    switch (size) {
      case avatarSizes.small:
        return 8;
      case avatarSizes.medium:
        return 14;
      case avatarSizes.large:
        return 20;
      default:
        return 0;
    }
  };
  return <SizeDotWrapper isSelected={isSelected} icon={<Dot size={getSize()} />} {...props} />;
};

const variants = {
  beam: 'beam',
  bauhaus: 'bauhaus',
  ring: 'ring',
  sunset: 'sunset',
  pixel: 'pixel',
  marble: 'marble',
};

const Playground = () => {
  const defaultPlaygroundColors = paletteColors[493];
  const [playgroundColors, setPlaygroundColors] = useState(defaultPlaygroundColors);

  const [darkMode, setDarkMode] = useState(false);
  const [dotColor0, setDotColor0] = useState(playgroundColors[0]);
  const [dotColor1, setDotColor1] = useState(playgroundColors[1]);
  const [dotColor2, setDotColor2] = useState(playgroundColors[2]);
  const [dotColor3, setDotColor3] = useState(playgroundColors[3]);
  const [dotColor4, setDotColor4] = useState(playgroundColors[4]);

  const filteredColors = [dotColor0, dotColor1, dotColor2, dotColor3, dotColor4];

  const handleRandomColors = () => {
    setPlaygroundColors(paletteColors[getRandomPaletteIndex()]);
  };

  useEffect(() => {
    setDotColor0(playgroundColors[0]);
    setDotColor1(playgroundColors[1]);
    setDotColor2(playgroundColors[2]);
    setDotColor3(playgroundColors[3]);
    setDotColor4(playgroundColors[4]);
  }, [playgroundColors]);

  const [avatarSize, setAvatarSize] = useState(avatarSizes.medium);
  const [variant, setVariant] = useState(variants.beam);
  const [isSquare, setSquare] = useState(false);

  return (
    <>
      <BaseStyles darkMode={darkMode} />
      <Header>
        <SegmentGroup>
          {Object.keys(variants).map((variantItem, i) => (
            <Segment
              key={i}
              onClick={() => setVariant(variants[variantItem])}
              isSelected={variantItem === variant}
            >
              {variantItem}
            </Segment>
          ))}
        </SegmentGroup>
        <ColorsSection>
          <ColorDot value={dotColor0} onChange={(color) => setDotColor0(color)} />
          <ColorDot value={dotColor1} onChange={(color) => setDotColor1(color)} />
          <ColorDot value={dotColor2} onChange={(color) => setDotColor2(color)} />
          <ColorDot value={dotColor3} onChange={(color) => setDotColor3(color)} />
          <ColorDot value={dotColor4} onChange={(color) => setDotColor4(color)} />
        </ColorsSection>

        <Button onClick={() => handleRandomColors()}>Random palette</Button>
        <Button onClick={() => setSquare(!isSquare)}>{isSquare ? 'Round' : 'Square'}</Button>
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
            square={isSquare}
            name={exampleName}
            playgroundColors={filteredColors}
            variant={variant}
          />
        ))}
      </AvatarsGrid>
    </>
  );
};

export default Playground;
