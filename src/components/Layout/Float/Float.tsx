import styled, { css } from 'styled-components/native';
import { setSpaceUnit, setSpaceUnitToProp, size, zIndex } from '../../utils';
import type { FloatProps } from './Float.types';
import type { FlexBoxProps } from '../Flex/Flex.types';

const transform = css<Pick<FloatProps, 'originSize'>>`
  ${({ originSize }) =>
    originSize &&
    setSpaceUnitToProp(
      `translate(-${originSize[0] / 2}px, -${originSize[1] / 2}px)`,
      'transform'
    )};
`;

export const Float = styled.View<
  FloatProps & Pick<FlexBoxProps, 'bleed' | 'wfull' | 'hfull'>
>`
  position: absolute;
  ${({ y }) =>
    typeof y != undefined &&
    css`
      top: ${setSpaceUnit(y)};
    `};
  ${({ x }) =>
    typeof x != undefined &&
    css`
      left: ${setSpaceUnit(x)};
    `};
  ${({ rx }) =>
    typeof rx != undefined &&
    css`
      right: ${setSpaceUnit(rx)};
    `};
  ${({ by }) =>
    typeof by != undefined &&
    css`
      bottom: ${setSpaceUnit(by)};
    `};
  overflow: ${({ bleed }) => !bleed && 'hidden'};
  ${zIndex};
  ${transform};
  ${size};
`;
Float.displayName = 'Float';
