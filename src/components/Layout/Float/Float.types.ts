import type { SpaceUnit, Zindex } from '../../types';

export type FloatProps = {
  z?: Zindex;
  x?: SpaceUnit;
  rx?: SpaceUnit;
  y?: SpaceUnit;
  by?: SpaceUnit;
  originSize?: [number, number];
};
