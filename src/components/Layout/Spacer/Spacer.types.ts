import type { PropsWithChildren } from 'react';
import type { SpaceUnit, MarginProps, PaddingProps } from '../../types';

export type SpacerProps = PropsWithChildren<
  Partial<
    {
      x?: SpaceUnit | 'auto';
      y?: SpaceUnit | 'auto';
    } & MarginProps &
      PaddingProps
  >
>;
