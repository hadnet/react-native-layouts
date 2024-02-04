import type { PropsWithChildren } from 'react';
import type { SpaceUnit, MarginProps, PaddingProps } from '../../types';

export type SpacerProps = PropsWithChildren<
  Partial<
    {
      spaceX?: SpaceUnit | 'auto';
      spaceY?: SpaceUnit | 'auto';
      gap?: number;
    } & MarginProps &
      PaddingProps
  >
>;
