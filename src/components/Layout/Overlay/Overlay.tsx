import React from 'react';
import { View } from 'react-native';

type OverlayProps = {
  color?: string;
  opacity?: number;
  dark?: boolean;
  darkColor?: string;
  children?: React.ReactNode;
};

export const Overlay = ({
  dark,
  children,
  opacity = 1,
  color = 'white',
  darkColor = 'black',
}: OverlayProps) => {
  return (
    <View
      style={{
        opacity,
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: dark ? darkColor : color,
      }}
    >
      {children}
    </View>
  );
};
