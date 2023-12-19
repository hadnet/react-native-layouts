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
  ${({ y }) =>
    y != undefined &&
    css`
      top: ${setSpaceUnit(y)};
    `};
  ${({ x }) =>
    x != undefined &&
    css`
      left: ${setSpaceUnit(x)};
    `};
  ${({ rx }) =>
    rx != undefined &&
    css`
      right: ${setSpaceUnit(rx)};
    `};
  ${({ by }) =>
    by != undefined &&
    css`
      bottom: ${setSpaceUnit(by)};
    `};
  overflow: ${({ bleed }) => !bleed && 'hidden'};
  ${zIndex};
  ${transform};
  ${size};
`;
Float.displayName = 'Float';
