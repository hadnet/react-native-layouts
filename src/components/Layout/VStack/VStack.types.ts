import type { PropsWithChildren } from 'react';
import type { FlexProps } from '../Flex/Flex.types';
import type { SpaceUnit } from '../../types';

export type VStackProps = PropsWithChildren<
  {
    width?: SpaceUnit;
    height?: SpaceUnit;
    space?: SpaceUnit;
    gap?: SpaceUnit;
    fluid?: boolean;
    divider?: boolean;
    dividerColor?: string;
    dividerWidth?: number | `${number}%`;
    DividerComponent?: JSX.Element;
  } & FlexProps
>;
