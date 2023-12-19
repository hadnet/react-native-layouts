import type { SpaceUnit, Zindex } from '../../types';
import type { FlexBoxProps } from '../Flex/Flex.types';

export type FloatProps = {
  z?: Zindex;
  x?: SpaceUnit;
  rx?: SpaceUnit;
  y?: SpaceUnit;
  by?: SpaceUnit;
  originSize?: [number, number];
} & Pick<FlexBoxProps, 'bleed' | 'wfull' | 'hfull'>;
