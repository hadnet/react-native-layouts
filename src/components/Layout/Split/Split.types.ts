import type { PropsWithChildren } from 'react';
import type { FlexProps } from '../Flex/Flex.types';

export type SplitProps = PropsWithChildren<
  {
    auto?: boolean;
    ratio?: '1/2' | '1/3' | '1/4' | '2/3' | '3/4';
    row?: boolean;
  } & FlexProps
>;
