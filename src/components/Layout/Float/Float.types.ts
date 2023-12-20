import type { SpaceUnit, Zindex } from '../../types';
import type { FlexBoxProps } from '../Flex/Flex.types';

export type PositionProps = {
  top?: SpaceUnit;
  bottom?: SpaceUnit;
  left?: SpaceUnit;
  right?: SpaceUnit;
  x?: never;
  y?: never;
};

export type CoordinateProps = {
  x?: SpaceUnit;
  y?: SpaceUnit;
  top?: never;
  bottom?: never;
  left?: never;
  right?: never;
};

export type FloatProps = (PositionProps | CoordinateProps) & {
  z?: Zindex;
  originSize?: [number, number];
} & Pick<FlexBoxProps, 'bleed' | 'wfull' | 'hfull'>;
