import React from 'react';
import styled from 'styled-components/native';
import { FlexBox } from '../Flex/Flex';
import { setSpaceUnit } from '../../utils';
import type { SpacerProps } from './Spacer.types';

const SpacerBase = styled(FlexBox)<SpacerProps>`
  width: ${({ spaceX = 'auto' }) => setSpaceUnit(spaceX)};
  height: ${({ spaceY = 'auto' }) => setSpaceUnit(spaceY)};
`;

export function Spacer({ children, spaceX, spaceY, ...props }: SpacerProps) {
  return (
    <SpacerBase n={'none'} spaceX={spaceX} spaceY={spaceY} {...props}>
      {children}
    </SpacerBase>
  );
}
Spacer.displayName = 'Spacer';
