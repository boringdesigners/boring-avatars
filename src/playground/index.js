import React from 'react'
import styled from 'styled-components'
import AvatarGeometric from '../avatar/components/avatar-geometric'
import { SegmentGroup, Segment, Button, BaseStyles, ColorDot } from './ui-system'

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: var(--pagePadding);
`

const SettingsSection = styled.div`
  display: inline-grid;
  align-items: center;
`

const ColorsSection = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
`

const Playground = () => {
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
            <ColorDot color="red"/>
            <ColorDot color="blue"/>
          </ColorsSection>
        </SettingsSection>

        <div>
          <Button>Random colors</Button>
          <Button>Random names</Button>
        </div>
      </Header>

      <AvatarGeometric/>
      <AvatarGeometric/>
      <AvatarGeometric/>
      <AvatarGeometric/>
      <AvatarGeometric/>
      <AvatarGeometric/>
      <AvatarGeometric/>
    </>
  )
}

export default Playground