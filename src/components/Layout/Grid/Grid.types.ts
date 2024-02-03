import type { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';

export type GridProps = {
  space?: number;
  gap?: number;
  rowGap?: number;
  colGap?: number;
  columns: number;
  empty?: boolean;
  fill?: boolean;
  flex?: boolean;
  fluid?: boolean;
  children: ReactNode;
  devMode?: boolean;
  style?: ViewStyle;
} & (
  | {
      center?: boolean;
      justifyContent?: never;
      alignItems?: never;
    }
  | {
      center?: never;
      justifyContent?: ViewStyle['justifyContent'];
      alignItems?: ViewStyle['alignItems'];
    }
);
