import styled from 'styled-components/native';
import { spacing, mapDirection, setSpaceUnit } from '../utils';
import type { BoxProps } from '../types';

export const Box = styled.View<BoxProps>`
  flex: ${({ fill }) => (fill ? 1 : 'none')};
  flex-basis: ${({ height = 'auto' }) => setSpaceUnit(height)};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  width: ${({ width = 'auto' }) => setSpaceUnit(width)};
  height: ${({ height = 'auto' }) => setSpaceUnit(height)};
  background-color: ${({ color = 'transparent' }) => color};
  border-radius: ${({ radius = 0 }) => (radius === 'full' ? 9999 : radius)}px;
  overflow: ${({ bleed }) => !bleed && 'hidden'};
  ${({ border }) => (border ? `border: ${border}` : undefined)};
  ${({ row }) => mapDirection(row)};
  ${spacing};
`;
Box.displayName = 'Box';
