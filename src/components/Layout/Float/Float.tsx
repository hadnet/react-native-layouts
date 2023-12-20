import styled, { css } from 'styled-components/native';
import { setSpaceUnit, setSpaceUnitToProp, size, zIndex } from '../../utils';
import type { FloatProps } from './Float.types';

const transform = css<Pick<FloatProps, 'originSize'>>`
  ${({ originSize }) =>
    originSize &&
    setSpaceUnitToProp(
      `translate(-${originSize[0] / 2}px, -${originSize[1] / 2}px)`,
      'transform'
    )};
`;

export const Float = styled.View<FloatProps>`
  position: absolute;
  ${({ y, top }) =>
    (top != undefined || y != undefined) &&
    css`
      top: ${setSpaceUnit(top ?? y)};
    `};
  ${({ x, left }) =>
    (left != undefined || x != undefined) &&
    css`
      left: ${setSpaceUnit(left ?? x)};
    `};
  ${({ right }) =>
    right != undefined &&
    css`
      right: ${setSpaceUnit(right)};
    `};
  ${({ bottom }) =>
    bottom != undefined &&
    css`
      bottom: ${setSpaceUnit(bottom)};
    `};
  overflow: ${({ bleed }) => !bleed && 'hidden'};
  ${zIndex};
  ${transform};
  ${size};
`;
Float.displayName = 'Float';
