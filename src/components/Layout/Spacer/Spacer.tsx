import React from 'react';
import styled from 'styled-components/native';
import { FlexBox } from '../Flex/Flex';
import type { SpacerProps } from './Spacer.types';
import { setSpaceUnit } from '../../utils';

const SpacerBase = styled(FlexBox)<SpacerProps>`
  width: ${({ x = 'auto' }) => setSpaceUnit(x)};
  height: ${({ y = 'auto' }) => setSpaceUnit(y)};
`;

export function Spacer({ children, x, y, ...props }: SpacerProps) {
  return (
    <SpacerBase n={'none'} x={x} y={y} {...props}>
      {children}
    </SpacerBase>
  );
}
Spacer.displayName = 'Spacer';
