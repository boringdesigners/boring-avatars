import React, { useState } from 'react'
import styled from 'styled-components'
import AvatarGeometric from '../avatar/components/avatar-geometric'
import { SegmentGroup, Segment, Button, BaseStyles, ColorDot } from './ui-system'
import colors from 'nice-color-palettes'

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

const ContentSection = styled.div`
  padding: var(--pagePadding);
`

const AvatarWrapper = ({ name, playgroundColors }) => {
  const [avatarName, setAvatarName] = useState(name)
  return (
    <>
      <div>
        <AvatarGeometric name={name} colors={playgroundColors} />
      </div>
      <div>
        {avatarName}
      </div>
      <input value={avatarName} onChange={e => setAvatarName(e.target.value)}/>
    </>
  )
}

const defaultPlaygroundColors = colors[97]

const Playground = () => {
  const [playgroundColors, setPlaygroundColors] = useState(defaultPlaygroundColors)
  return (
    <>
      <BaseStyles />
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
          <Button>Random colors</Button>
          <Button>Random names</Button>
        </div>
      </Header>

      <ContentSection>
        <AvatarWrapper name="Brian" color={playgroundColors} />
        <AvatarWrapper name="Mike" color={playgroundColors} />
      </ContentSection>
    </>
  )
}

export default Playground