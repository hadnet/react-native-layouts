import type { PropsWithChildren } from 'react';
import type { FlexPositionsProps, Zindex } from '../../types';

export type FlexBoxProps = {
  n?: number | 'none';
  z?: Zindex;
  row?: boolean;
  color?: string;
  devMode?: boolean;
  bleed?: boolean;
  wfull?: boolean;
  hfull?: boolean;
} & FlexPositionsProps;

export type FlexProps = PropsWithChildren<Omit<FlexBoxProps, 'color'>>;
