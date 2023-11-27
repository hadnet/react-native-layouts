import type { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';

export type TilesProps =
  | {
      space: number;
      columns: number;
      empty: boolean;
      fill?: boolean;
      children: ReactNode;
      centered?: boolean;
      justifyContent?: never;
      alignItems?: never;
      devMode?: boolean;
      style?: ViewStyle;
    }
  | {
      space: number;
      columns: number;
      empty: boolean;
      fill?: boolean;
      children: ReactNode;
      centered?: never;
      justifyContent?: ViewStyle['justifyContent'];
      alignItems?: ViewStyle['alignItems'];
      devMode?: boolean;
      style?: ViewStyle;
    };
