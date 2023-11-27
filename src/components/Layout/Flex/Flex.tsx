import React from 'react';
import styled, { css } from 'styled-components/native';
import {
  spacing,
  mapDirection,
  getRandomColor,
  size,
  zIndex,
} from '../../utils';
import type { FlexProps, FlexBoxProps } from './Flex.types';

const dev = css<{ devMode?: boolean }>`
  background-color: ${({ devMode }) =>
    devMode ? getRandomColor() : 'transparent'};
  border: ${({ devMode }) => (devMode ? `3px solid gray` : 'none')};
`;

export const FlexBox = styled.View<FlexBoxProps>`
  flex: ${({ n = 0 }) => n};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  overflow: ${({ bleed }) => !bleed && 'hidden'};
  ${({ row }) => mapDirection(row)};
  ${zIndex};
  ${dev};
  ${size},
  ${spacing};
`;

export function Flex({ children, ...props }: FlexProps) {
  return <FlexBox {...props}>{children}</FlexBox>;
}
Flex.displayName = 'Flex';
