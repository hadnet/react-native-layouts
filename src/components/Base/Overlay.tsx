import React from 'react';
import { View } from 'react-native';
import type { OverlayProps } from '../types';

const centered = {
  alignItems: 'center',
  justifyContent: 'center',
} as const;

export const Overlay = ({
  dark,
  children,
  center,
  opacity = 1,
  color = 'white',
  darkColor = 'black',
}: OverlayProps) => {
  return (
    <View
      style={[
        {
          opacity,
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: dark ? darkColor : color,
        },
        center && centered,
      ]}
    >
      {children}
    </View>
  );
};
