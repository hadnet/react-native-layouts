import type { PropsWithChildren } from 'react';
import type { SpaceUnit } from '../../types';
import type { FlexProps } from '../Flex/Flex.types';

export type HStackProps = PropsWithChildren<
  {
    width?: SpaceUnit;
    height?: SpaceUnit;
    space?: SpaceUnit;
    gap?: number;
    fluid?: boolean;
    fill?: boolean;
  } & FlexProps
>;
